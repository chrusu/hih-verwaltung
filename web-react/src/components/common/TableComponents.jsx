/**
 * Shared Table Components
 * Wiederverwendbare Tabellen-Komponenten für Data Tables und Positionen
 */

import styled from 'styled-components';
import { theme } from '../../themes/terminal';

// ============================================
// DESKTOP TABLE COMPONENTS
// ============================================

/**
 * Standard Tabellen-Container
 */
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: ${theme.spacing.md} 0;
  font-family: ${theme.fonts.mono};
  font-size: ${theme.fontSizes.sm};
  
  /* Hide table on mobile */
  @media (max-width: 768px) {
    display: ${props => props.hideMobile ? 'none' : 'table'};
  }
`;

/**
 * Table Header
 */
export const TableHead = styled.thead`
  background: ${theme.colors.bgSecondary};
`;

/**
 * Table Header Cell
 */
export const Th = styled.th`
  background: ${theme.colors.bgSecondary};
  color: ${theme.colors.accentCyan};
  padding: ${theme.spacing.sm};
  text-align: ${props => props.align || 'left'};
  border: 1px solid ${theme.colors.borderColor};
  font-size: ${theme.fontSizes.xs};
  text-transform: uppercase;
  letter-spacing: ${theme.letterSpacing.wide};
  font-weight: ${theme.fontWeights.semibold};
  white-space: nowrap;
  
  @media (max-width: 768px) {
    padding: ${theme.spacing.xs} ${theme.spacing.sm};
    font-size: ${theme.fontSizes.xs};
  }
`;

/**
 * Table Body
 */
export const TableBody = styled.tbody`
  /* Styling via Rows */
`;

/**
 * Table Row
 */
export const Tr = styled.tr`
  transition: background 0.2s ease;
  
  &:hover:not(.editing) {
    background: ${theme.colors.bgSecondary};
    
    td {
      color: ${theme.colors.textPrimary};
    }
  }
  
  &.editing {
    background: ${theme.colors.accentBlue}22;
    
    td {
      color: ${theme.colors.textPrimary};
    }
  }
  
  &.clickable {
    cursor: pointer;
  }
`;

/**
 * Table Data Cell
 */
export const Td = styled.td`
  padding: ${theme.spacing.sm};
  border: 1px solid ${theme.colors.borderColor};
  background: ${props => props.background || theme.colors.bgTertiary};
  color: ${theme.colors.textPrimary};
  text-align: ${props => props.align || 'left'};
  
  &.editing {
    padding: 2px;
  }
  
  &.numeric {
    text-align: right;
    font-family: ${theme.fonts.mono};
    color: ${theme.colors.textPrimary};
    font-weight: ${theme.fontWeights.medium};
  }
  
  &.actions {
    text-align: center;
    width: ${props => props.width || '120px'};
  }
  
  @media (max-width: 768px) {
    padding: ${theme.spacing.xs};
    font-size: ${theme.fontSizes.xs};
  }
`;

/**
 * Total Row (für Summen)
 */
export const TotalRow = styled(Tr)`
  background: ${theme.colors.bgSecondary};
  font-weight: bold;
  
  td {
    border-top: 2px solid ${theme.colors.accentGreen};
    color: ${theme.colors.textPrimary};
    font-weight: ${theme.fontWeights.bold};
  }
`;

/**
 * Small Input für Inline-Editing in Tabellen
 */
export const TableInput = styled.input`
  width: 100%;
  padding: ${theme.spacing.xs};
  font-size: ${theme.fontSizes.sm};
  margin: 0;
  background: ${theme.colors.bgPrimary};
  color: ${theme.colors.textPrimary};
  border: 1px solid ${theme.colors.accentBlue};
  border-radius: ${theme.borderRadius.base};
  font-family: ${theme.fonts.mono};
  
  &:focus {
    background: ${theme.colors.bgPrimary};
    border-color: ${theme.colors.accentGreen};
    color: ${theme.colors.textPrimary};
    outline: none;
  }
`;

/**
 * Small Select für Inline-Editing
 */
export const TableSelect = styled.select`
  width: 100%;
  padding: ${theme.spacing.xs};
  font-size: ${theme.fontSizes.sm};
  margin: 0;
  background: ${theme.colors.bgPrimary};
  color: ${theme.colors.textPrimary};
  border: 1px solid ${theme.colors.accentBlue};
  border-radius: ${theme.borderRadius.base};
  font-family: ${theme.fonts.mono};
  
  &:focus {
    background: ${theme.colors.bgPrimary};
    border-color: ${theme.colors.accentGreen};
    outline: none;
  }
`;

// ============================================
// MOBILE CARD COMPONENTS
// ============================================

/**
 * Mobile Liste (statt Tabelle)
 */
export const MobileList = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    margin: ${theme.spacing.md} 0;
  }
`;

/**
 * Mobile Card (eine Zeile als Card)
 */
export const MobileCard = styled.div`
  background: ${theme.colors.bgTertiary};
  border: 1px solid ${theme.colors.borderColor};
  border-radius: ${theme.borderRadius.base};
  margin-bottom: ${theme.spacing.md};
  padding: ${theme.spacing.md};
  transition: all 0.2s ease;
  
  &.editing {
    border-color: ${theme.colors.accentBlue};
    background: ${theme.colors.accentBlue}22;
  }
  
  &.clickable {
    cursor: pointer;
    
    &:active {
      transform: scale(0.98);
      background: ${theme.colors.bgSecondary};
    }
  }
`;

/**
 * Card Header (mit Nummer/Status)
 */
export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing.sm};
  padding-bottom: ${theme.spacing.sm};
  border-bottom: 1px solid ${theme.colors.borderColor};
`;

/**
 * Card Title/Nummer
 */
export const CardTitle = styled.span`
  font-weight: bold;
  color: ${theme.colors.accentCyan};
  font-size: ${theme.fontSizes.base};
`;

/**
 * Card Actions (Buttons)
 */
export const CardActions = styled.div`
  display: flex;
  gap: ${theme.spacing.xs};
  flex-wrap: wrap;
`;

/**
 * Card Field (Label + Value Paar)
 */
export const CardField = styled.div`
  margin-bottom: ${theme.spacing.sm};
`;

/**
 * Field Label
 */
export const CardFieldLabel = styled.div`
  font-size: ${theme.fontSizes.xs};
  color: ${theme.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: ${theme.letterSpacing.wide};
  margin-bottom: ${theme.spacing.xs};
`;

/**
 * Field Value
 */
export const CardFieldValue = styled.div`
  color: ${theme.colors.textPrimary};
  font-size: ${theme.fontSizes.sm};
  
  &.numeric {
    font-family: ${theme.fonts.mono};
    font-weight: ${theme.fontWeights.medium};
  }
  
  &.highlight {
    color: ${theme.colors.accentCyan};
    font-weight: ${theme.fontWeights.semibold};
  }
`;

/**
 * Mobile Total Card (für Summen)
 */
export const MobileTotalCard = styled(MobileCard)`
  background: ${theme.colors.bgSecondary};
  border: 2px solid ${theme.colors.accentGreen};
  margin-top: ${theme.spacing.lg};
`;

/**
 * Total Row für Mobile (Flex statt Table Row)
 */
export const TotalRowMobile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing.sm};
  font-weight: bold;
  color: ${theme.colors.textPrimary};
  
  &:last-child {
    margin-bottom: 0;
    padding-top: ${theme.spacing.sm};
    border-top: 1px solid ${theme.colors.accentYellow};
    color: ${theme.colors.accentYellow};
  }
`;

// ============================================
// UTILITY COMPONENTS
// ============================================

/**
 * Empty State (keine Daten)
 */
export const EmptyState = styled.div`
  text-align: center;
  padding: ${theme.spacing.xl} ${theme.spacing.lg};
  color: ${theme.colors.textSecondary};
  font-style: italic;
  
  @media (max-width: 768px) {
    padding: ${theme.spacing.lg} ${theme.spacing.md};
  }
`;

/**
 * Loading State
 */
export const LoadingState = styled(EmptyState)`
  color: ${theme.colors.accentCyan};
`;

/**
 * Table Container (mit Scroll)
 */
export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: auto;
  max-height: ${props => props.maxHeight || 'none'};
  
  /* Custom Scrollbar */
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
`;
