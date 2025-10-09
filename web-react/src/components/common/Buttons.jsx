/**
 * Shared Button Components
 * Wiederverwendbare Button-Komponenten für die gesamte App
 */

import styled from 'styled-components';
import { theme } from '../../themes/terminal';

/**
 * Standard Action Button (Primary)
 * Für Hauptaktionen wie "Speichern", "Erstellen"
 */
export const ActionButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  font-family: ${theme.fonts.mono};
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.medium};
  color: ${props => props.variant === 'secondary' ? theme.colors.textPrimary : theme.colors.bgPrimary};
  background: ${props => {
    switch(props.variant) {
      case 'secondary': return theme.colors.bgTertiary;
      case 'danger': return theme.colors.accentRed;
      case 'success': return theme.colors.accentGreen;
      default: return theme.colors.accentBlue;
    }
  }};
  border: 2px solid ${props => {
    switch(props.variant) {
      case 'secondary': return theme.colors.borderColor;
      case 'danger': return theme.colors.accentRed;
      case 'success': return theme.colors.accentGreen;
      default: return theme.colors.accentCyan;
    }
  }};
  border-radius: ${theme.borderRadius.base};
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  min-width: 120px;
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px ${props => {
      switch(props.variant) {
        case 'danger': return 'rgba(255, 85, 85, 0.3)';
        case 'success': return 'rgba(85, 255, 85, 0.3)';
        default: return 'rgba(74, 158, 255, 0.3)';
      }
    }};
    background: ${props => {
      if (props.variant === 'secondary') return theme.colors.bgHover;
      return undefined;
    }};
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &:focus-visible {
    outline: 3px solid ${theme.colors.accentYellow};
    outline-offset: 2px;
  }
  
  /* Mobile touch targets */
  @media (max-width: 768px) {
    padding: 18px 24px;
    font-size: 18px;
    min-height: 52px;
    min-width: 120px;
  }
`;

/**
 * Small Button für Tabellen-Actions
 * Kompakte Variante für "Bearbeiten", "Löschen" in Zeilen
 */
export const SmallButton = styled(ActionButton)`
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  font-size: ${theme.fontSizes.xs};
  min-width: auto;
  margin: 0 2px;
  
  @media (max-width: 768px) {
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    font-size: ${theme.fontSizes.sm};
  }
`;

/**
 * F-Key Button Component
 * Spezielle Buttons für F-Tasten-Navigation (Bottom Menu)
 */
export const FKeyButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.md} 2em ${theme.spacing.md} ${theme.spacing.md};
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: ${theme.borderRadius.base};
  font-size: ${theme.fontSizes.base};
  font-family: ${theme.fonts.mono};
  background: ${theme.colors.bgTertiary};
  border: 2px solid ${theme.colors.borderColor};
  color: ${theme.colors.textPrimary};
  min-width: auto;
  width: auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  
  /* Desktop button styling */
  @media (min-width: 769px) {
    &:hover {
      background: ${theme.colors.bgHover};
      border-color: ${theme.colors.accentBlue};
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(74, 158, 255, 0.3);
    }
    
    &:active {
      transform: translateY(0);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  }
  
  /* Mobile touch targets */
  @media (max-width: 768px) {
    padding: 18px 24px;
    font-size: 18px;
    min-height: 52px;
    min-width: 120px;
    margin: 4px 2px;
  }
  
  &.active {
    background: ${theme.colors.accentBlue};
    color: ${theme.colors.bgPrimary};
    border-color: ${theme.colors.accentCyan};
    box-shadow: 0 4px 12px rgba(74, 158, 255, 0.5);
    
    &:hover {
      background: ${theme.colors.accentCyan};
    }
  }
  
  &:focus-visible {
    outline: 3px solid ${theme.colors.accentYellow};
    outline-offset: 2px;
  }
`;

/**
 * F-Key Label (Taste selbst, z.B. "F1")
 */
export const FKeyLabel = styled.span`
  background: ${theme.colors.bgPrimary};
  color: ${theme.colors.accentYellow};
  padding: 4px 10px;
  border-radius: ${theme.borderRadius.base};
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.sm};
  border: 2px solid ${theme.colors.accentBlue};
  min-width: 32px;
  text-align: center;
  box-shadow: inset 0 -2px 0 rgba(0, 0, 0, 0.3);
  
  /* Mobile enhancements */
  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 14px;
    font-weight: ${theme.fontWeights.bold};
    border-radius: 6px;
    min-width: 36px;
  }
  
  .active & {
    background: ${theme.colors.bgPrimary};
    color: ${theme.colors.accentYellow};
    border-color: ${theme.colors.accentYellow};
  }
`;

/**
 * F-Key Text (Beschreibung, z.B. "Kunden")
 */
export const FKeyText = styled.span`
  font-weight: ${theme.fontWeights.medium};
  letter-spacing: ${theme.letterSpacing.normal};
  
  .active & {
    font-weight: ${theme.fontWeights.bold};
  }
`;

/**
 * Icon Button
 * Runde Buttons für Icons (z.B. Kontext-Menü)
 */
export const IconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: ${theme.spacing.xs};
  background: ${theme.colors.bgTertiary};
  border: 2px solid ${theme.colors.borderColor};
  border-radius: ${theme.borderRadius.base};
  color: ${theme.colors.textPrimary};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    background: ${theme.colors.bgHover};
    border-color: ${theme.colors.accentBlue};
    color: ${theme.colors.accentCyan};
  }
  
  &:active:not(:disabled) {
    transform: scale(0.95);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &:focus-visible {
    outline: 2px solid ${theme.colors.accentYellow};
    outline-offset: 2px;
  }
  
  /* Mobile */
  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

/**
 * Button Group Container
 * Für nebeneinanderliegende Buttons
 */
export const ButtonGroup = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  flex-wrap: wrap;
  align-items: center;
  
  @media (max-width: 768px) {
    gap: ${theme.spacing.sm};
    width: 100%;
    
    button {
      flex: 1;
      min-width: 0;
    }
  }
`;
