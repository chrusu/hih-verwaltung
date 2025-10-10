/**
 * Passport.js Configuration
 * Multi-Provider Authentication (Local, Google, GitHub)
 */

import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as GitHubStrategy } from 'passport-github2';
import userService from '../services/userService.mjs';

/**
 * Local Strategy (Email/Passwort)
 */
passport.use(new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password'
  },
  async (email, password, done) => {
    try {
      const user = await userService.verifyPassword(email, password);
      
      if (!user) {
        return done(null, false, { message: 'Email oder Passwort falsch' });
      }
      
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }
));

/**
 * Google OAuth Strategy
 */
if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  passport.use(new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const user = await userService.findOrCreateOAuth({
          provider: 'google',
          id: profile.id,
          email: profile.emails && profile.emails[0] ? profile.emails[0].value : null,
          displayName: profile.displayName,
          avatar: profile.photos && profile.photos[0] ? profile.photos[0].value : null
        });
        
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  ));
}

/**
 * GitHub OAuth Strategy
 */
if (process.env.GITHUB_CLIENT_ID && process.env.GITHUB_CLIENT_SECRET) {
  passport.use(new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_CALLBACK_URL,
      scope: ['user:email']
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // GitHub primary email finden
        const email = profile.emails && profile.emails.find(e => e.primary)?.value ||
                     profile.emails && profile.emails[0]?.value ||
                     null;
        
        const user = await userService.findOrCreateOAuth({
          provider: 'github',
          id: profile.id,
          email: email,
          displayName: profile.displayName || profile.username,
          username: profile.username,
          avatar: profile.photos && profile.photos[0] ? profile.photos[0].value : null
        });
        
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  ));
}

/**
 * Serialize User für Session
 */
passport.serializeUser((user, done) => {
  done(null, user.id);
});

/**
 * Deserialize User aus Session
 */
passport.deserializeUser(async (id, done) => {
  try {
    const user = await userService.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

export default passport;
