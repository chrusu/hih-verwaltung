/**
 * User Service
 * Verwaltet User-Accounts und Provider-Verknüpfungen
 */

const fs = require('fs').promises;
const path = require('path');
const bcrypt = require('bcryptjs');
const { fileURLToPath } = require('url');

class UserService {
  constructor(basePath = 'data/users') {
    this.basePath = path.join(__dirname, '../../', basePath);
    this.usersFile = path.join(this.basePath, 'users.json');
  }

  /**
   * Alle Users laden
   */
  async getAll() {
    try {
      const data = await fs.readFile(this.usersFile, 'utf-8');
      const parsed = JSON.parse(data);
      return parsed.users || [];
    } catch (error) {
      if (error.code === 'ENOENT') {
        return [];
      }
      throw error;
    }
  }

  /**
   * User nach ID finden
   */
  async findById(id) {
    const users = await this.getAll();
    return users.find(u => u.id === id);
  }

  /**
   * User nach Email finden
   */
  async findByEmail(email) {
    const users = await this.getAll();
    return users.find(u => u.email.toLowerCase() === email.toLowerCase());
  }

  /**
   * User nach Provider-ID finden
   */
  async findByProvider(providerType, providerId) {
    const users = await this.getAll();
    return users.find(u => 
      u.providers && u.providers.some(p => 
        p.type === providerType && p.id === providerId
      )
    );
  }

  /**
   * Neuen User erstellen
   */
  async create(userData) {
    const users = await this.getAll();
    
    // Prüfen ob Email bereits existiert
    const existing = await this.findByEmail(userData.email);
    if (existing) {
      throw new Error('Email bereits registriert');
    }

    const newUser = {
      id: `usr_${this.generateId()}`,
      email: userData.email.toLowerCase(),
      name: userData.name || userData.email.split('@')[0],
      avatar: userData.avatar || null,
      providers: [],
      created: new Date().toISOString(),
      lastLogin: new Date().toISOString()
    };

    // Passwort hashen falls vorhanden
    if (userData.password) {
      newUser.passwordHash = await bcrypt.hash(userData.password, 10);
      newUser.providers.push({
        type: 'local',
        created: new Date().toISOString()
      });
    }

    users.push(newUser);
    await this.saveAll(users);
    
    // Passwort nicht zurückgeben
    const { passwordHash, ...userWithoutPassword } = newUser;
    return userWithoutPassword;
  }

  /**
   * Provider zu bestehendem User hinzufügen (Account-Linking)
   */
  async addProvider(userId, providerData) {
    const users = await this.getAll();
    const user = users.find(u => u.id === userId);
    
    if (!user) {
      throw new Error('User nicht gefunden');
    }

    // Prüfen ob Provider bereits existiert
    const existingProvider = user.providers.find(p => 
      p.type === providerData.type && p.id === providerData.id
    );
    
    if (existingProvider) {
      return user;
    }

    // Provider hinzufügen
    user.providers.push({
      type: providerData.type,
      id: providerData.id,
      created: new Date().toISOString()
    });

    // Avatar aktualisieren falls vorhanden und noch nicht gesetzt
    if (providerData.avatar && !user.avatar) {
      user.avatar = providerData.avatar;
    }

    // Name aktualisieren falls vorhanden und noch nicht gesetzt
    if (providerData.name && (!user.name || user.name === user.email.split('@')[0])) {
      user.name = providerData.name;
    }

    await this.saveAll(users);
    
    const { passwordHash, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  /**
   * User oder Provider-Account erstellen/finden (OAuth)
   */
  async findOrCreateOAuth(profile) {
    // Zuerst nach Provider-ID suchen
    let user = await this.findByProvider(profile.provider, profile.id);
    
    if (user) {
      // User gefunden, LastLogin aktualisieren
      await this.updateLastLogin(user.id);
      const { passwordHash, ...userWithoutPassword } = user;
      return userWithoutPassword;
    }

    // Dann nach Email suchen (Account-Linking)
    if (profile.email) {
      user = await this.findByEmail(profile.email);
      
      if (user) {
        // Bestehenden User gefunden, Provider hinzufügen
        return await this.addProvider(user.id, {
          type: profile.provider,
          id: profile.id,
          avatar: profile.avatar,
          name: profile.displayName
        });
      }
    }

    // Neuen User erstellen
    return await this.create({
      email: profile.email || `${profile.provider}_${profile.id}@oauth.local`,
      name: profile.displayName || profile.username || profile.email?.split('@')[0],
      avatar: profile.avatar,
      provider: {
        type: profile.provider,
        id: profile.id
      }
    });
  }

  /**
   * Passwort verifizieren (für Local Auth)
   */
  async verifyPassword(email, password) {
    const user = await this.findByEmail(email);
    
    if (!user || !user.passwordHash) {
      return null;
    }

    const isValid = await bcrypt.compare(password, user.passwordHash);
    
    if (!isValid) {
      return null;
    }

    await this.updateLastLogin(user.id);
    
    const { passwordHash, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  /**
   * LastLogin aktualisieren
   */
  async updateLastLogin(userId) {
    const users = await this.getAll();
    const user = users.find(u => u.id === userId);
    
    if (user) {
      user.lastLogin = new Date().toISOString();
      await this.saveAll(users);
    }
  }

  /**
   * User aktualisieren
   */
  async update(userId, updates) {
    const users = await this.getAll();
    const userIndex = users.findIndex(u => u.id === userId);
    
    if (userIndex === -1) {
      throw new Error('User nicht gefunden');
    }

    // Bestimmte Felder dürfen nicht aktualisiert werden
    const { id, email, providers, passwordHash, created, ...allowedUpdates } = updates;

    users[userIndex] = {
      ...users[userIndex],
      ...allowedUpdates,
      updated: new Date().toISOString()
    };

    await this.saveAll(users);
    
    const { passwordHash: _, ...userWithoutPassword } = users[userIndex];
    return userWithoutPassword;
  }

  /**
   * Alle Users speichern
   */
  async saveAll(users) {
    await fs.writeFile(
      this.usersFile,
      JSON.stringify({ users }, null, 2),
      'utf-8'
    );
  }

  /**
   * Zufällige ID generieren
   */
  generateId() {
    return Math.random().toString(36).substring(2, 15) + 
           Math.random().toString(36).substring(2, 15);
  }
}

module.exports = new UserService();
