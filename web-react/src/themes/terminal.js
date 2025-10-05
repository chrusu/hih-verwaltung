// Terminal Theme - CSS-in-JS mit Styled Components
// Basiert auf dem bestehenden Catppuccin-inspirierten Terminal-Theme

export const theme = {
  // === COLORS ===
  colors: {
    // Backgrounds
    bgPrimary: '#1e1e2e',     // Haupthintergrund
    bgSecondary: '#181825',   // Sekundärer Hintergrund
    bgTertiary: '#11111b',    // Tertiärer Hintergrund
    bgHover: '#313244',       // Hover-Zustand
    
    // Text
    textPrimary: '#cdd6f4',   // Haupttext
    textSecondary: '#a6adc8', // Sekundärtext
    textHighlight: '#f2cdcd', // Hervorgehobener Text
    
    // Accents
    accentBlue: '#89b4fa',    // Primärer Akzent
    accentPurple: '#cba6f7',  // Sekundärer Akzent
    accentCyan: '#94e2d5',    // Tertiärer Akzent
    accentGreen: '#a6e3a1',   // Erfolg
    accentYellow: '#f9e2af',  // Warnung
    accentRed: '#f38ba8',     // Fehler
    accentPink: '#f5c2e7',    // Info
    
    // Semantic Colors
    success: '#a6e3a1',
    warning: '#f9e2af',
    error: '#f38ba8',
    info: '#94e2d5',
    
    // Borders
    borderColor: '#45475a',
    borderActive: '#89b4fa',
  },
  
  // === TYPOGRAPHY ===
  fonts: {
    mono: "'JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', monospace",
  },
  
  fontSizes: {
    xs: '10px',
    sm: '11px',
    md: '12px',
    base: '13px',
    lg: '14px',
    xl: '16px',
    xxl: '18px',
  },
  
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  
  lineHeights: {
    tight: 1.2,
    normal: 1.4,
    relaxed: 1.5,
  },
  
  letterSpacing: {
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  
  // === SPACING ===
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    xxl: '32px',
  },
  
  // === BORDERS ===
  borderRadius: {
    none: '0',
    sm: '2px',
    base: '4px',
    md: '6px',
    lg: '8px',
    xl: '12px',
    full: '9999px',
  },
  
  // === SHADOWS ===
  shadows: {
    sm: '0 2px 4px rgba(0, 0, 0, 0.3)',
    md: '0 4px 8px rgba(0, 0, 0, 0.4)',
    lg: '0 8px 16px rgba(0, 0, 0, 0.5)',
    xl: '0 16px 32px rgba(0, 0, 0, 0.6)',
  },
  
  // === TRANSITIONS ===
  transitions: {
    fast: '0.15s ease',
    normal: '0.2s ease',
    slow: '0.3s ease',
  },
  
  // === BREAKPOINTS ===
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1200px',
  },
  
  // === Z-INDEX ===
  zIndex: {
    base: 1,
    dropdown: 10,
    modal: 100,
    tooltip: 1000,
  },
};

// Media Queries Helper
export const media = {
  mobile: `@media (max-width: ${theme.breakpoints.mobile})`,
  tablet: `@media (max-width: ${theme.breakpoints.tablet})`,
  desktop: `@media (min-width: ${theme.breakpoints.desktop})`,
  
  // Mobile-first approach
  up: {
    mobile: `@media (min-width: ${theme.breakpoints.mobile})`,
    tablet: `@media (min-width: ${theme.breakpoints.tablet})`,
    desktop: `@media (min-width: ${theme.breakpoints.desktop})`,
  },
};

// Common style mixins
export const mixins = {
  // Terminal Window Style
  terminalWindow: `
    background: ${theme.colors.bgSecondary};
    border: 1px solid ${theme.colors.borderColor};
    border-radius: ${theme.borderRadius.lg};
    box-shadow: ${theme.shadows.lg};
    overflow: hidden;
  `,
  
  // Button Base Style
  buttonBase: `
    padding: ${theme.spacing.sm} ${theme.spacing.lg};
    border: none;
    border-radius: ${theme.borderRadius.base};
    font-family: ${theme.fonts.mono};
    font-size: ${theme.fontSizes.md};
    font-weight: ${theme.fontWeights.semibold};
    text-transform: uppercase;
    letter-spacing: ${theme.letterSpacing.wide};
    cursor: pointer;
    transition: ${theme.transitions.normal};
    
    &:focus {
      outline: none;
    }
  `,
  
  // Primary Button
  buttonPrimary: `
    background: ${theme.colors.accentBlue};
    color: ${theme.colors.bgPrimary};
    
    &:hover {
      background: ${theme.colors.accentPurple};
      transform: translateY(-2px);
      box-shadow: ${theme.shadows.md};
    }
    
    &:active {
      transform: translateY(0);
    }
  `,
  
  // Secondary Button
  buttonSecondary: `
    background: ${theme.colors.bgPrimary};
    color: ${theme.colors.textPrimary};
    border: 1px solid ${theme.colors.borderColor};
    
    &:hover {
      background: ${theme.colors.bgHover};
    }
  `,
  
  // Input Base Style
  inputBase: `
    width: 100%;
    padding: ${theme.spacing.md};
    background: ${theme.colors.bgPrimary};
    border: 2px solid ${theme.colors.borderColor};
    border-radius: ${theme.borderRadius.base};
    color: ${theme.colors.textPrimary};
    font-family: ${theme.fonts.mono};
    font-size: ${theme.fontSizes.base};
    transition: ${theme.transitions.normal};
    
    &:focus {
      outline: none;
      border-color: ${theme.colors.accentBlue};
      background: ${theme.colors.bgHover};
      box-shadow: 0 0 0 3px rgba(137, 180, 250, 0.1);
    }
    
    &::placeholder {
      color: ${theme.colors.textSecondary};
      opacity: 0.7;
    }
  `,
  
  // Status Badge Base
  statusBadge: `
    display: inline-block;
    padding: 4px 8px;
    border-radius: ${theme.borderRadius.base};
    font-size: ${theme.fontSizes.xs};
    font-weight: ${theme.fontWeights.semibold};
    text-transform: uppercase;
    letter-spacing: ${theme.letterSpacing.wide};
    text-align: center;
    min-width: 60px;
  `,
  
  // Scrollbar Style
  scrollbar: `
    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    
    &::-webkit-scrollbar-track {
      background: ${theme.colors.bgTertiary};
    }
    
    &::-webkit-scrollbar-thumb {
      background: ${theme.colors.borderColor};
      border-radius: ${theme.borderRadius.base};
    }
    
    &::-webkit-scrollbar-thumb:hover {
      background: ${theme.colors.accentBlue};
    }
    
    scrollbar-width: thin;
    scrollbar-color: ${theme.colors.borderColor} ${theme.colors.bgTertiary};
  `,
  
  // Table Row Hover
  tableRowHover: `
    cursor: pointer;
    transition: ${theme.transitions.fast};
    border-bottom: 1px solid ${theme.colors.bgTertiary};
    
    &:hover {
      background: ${theme.colors.bgHover};
    }
  `,
};

export default theme;