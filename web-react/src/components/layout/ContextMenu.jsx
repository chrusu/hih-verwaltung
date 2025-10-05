import React from 'react';
import styled from 'styled-components';
import { theme } from '../../themes/terminal';

const ContextMenuContainer = styled.div`
  background: ${theme.colors.bgSecondary};
  border-top: 2px solid ${theme.colors.accentYellow};
  border-bottom: 1px solid ${theme.colors.borderColor};
  padding: ${theme.spacing.sm};
  font-family: ${theme.fonts.mono};
  font-size: ${theme.fontSizes.sm};
  
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.md};
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    gap: 8px;
    padding: 12px 8px;
    font-size: 16px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const ContextAction = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  color: ${theme.colors.textSecondary};
  
  /* Mobile touch targets - Enhanced */
  @media (max-width: 768px) {
    padding: 16px 20px;
    border-radius: 8px;
    min-height: 52px;
    min-width: 100px;
    margin: 4px;
    text-align: center;
    justify-content: center;
    
    &.available {
      border: 2px solid ${theme.colors.borderColor};
      background: ${theme.colors.bgTertiary};
    }
  }
  
  &.available {
    color: ${theme.colors.textPrimary};
    cursor: pointer;
    
    &:hover {
      color: ${theme.colors.accentBlue};
    }
    
    @media (max-width: 768px) {
      &:active {
        background: ${theme.colors.bgHover};
      }
    }
  }
  
  &.primary {
    color: ${theme.colors.accentGreen};
    font-weight: bold;
  }
  
  &.danger {
    color: ${theme.colors.accentRed};
  }
`;

const KeyBadge = styled.span`
  background: ${theme.colors.bgTertiary};
  color: ${theme.colors.accentCyan};
  padding: 2px 6px;
  border-radius: 3px;
  font-weight: bold;
  font-size: ${theme.fontSizes.xs};
  min-width: 20px;
  text-align: center;
  border: 1px solid ${theme.colors.borderColor};
  
  /* Mobile improvements - Enhanced */
  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 16px;
    min-width: 48px;
    border-radius: 6px;
    font-weight: bold;
  }
`;

const ActionText = styled.span`
  font-size: ${theme.fontSizes.sm};
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const Separator = styled.div`
  width: 1px;
  height: 20px;
  background: ${theme.colors.borderColor};
  margin: 0 ${theme.spacing.sm};
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const ContextMenu = ({ 
  currentScreen, 
  selectedIndex = 0, 
  data = [],
  onAction,
  showPdfExport = false 
}) => {
  const handleActionClick = (action) => {
    if (onAction) {
      onAction(action);
    }
  };

  const getContextActions = () => {
    const hasSelection = selectedIndex >= 0 && data.length > 0;
    const selectedItem = hasSelection ? data[selectedIndex] : null;
    
    switch (currentScreen) {
      case 'customers':
        return [
          {
            key: 'N',
            text: 'Neuer Kunde',
            action: 'new',
            available: true,
            primary: true
          },
          {
            key: 'E',
            text: 'Bearbeiten',
            action: 'edit',
            available: hasSelection,
            primary: false
          },
          {
            key: 'ENTER',
            text: 'Öffnen',
            action: 'open',
            available: hasSelection,
            primary: true
          },
          {
            key: 'D',
            text: 'Löschen',
            action: 'delete',
            available: hasSelection,
            danger: true
          }
        ];
        
      case 'offers':
        const actions = [
          {
            key: 'N',
            text: 'Neue Offerte',
            action: 'new',
            available: true,
            primary: true
          },
          {
            key: 'E',
            text: 'Bearbeiten',
            action: 'edit',
            available: hasSelection,
            primary: false
          },
          {
            key: 'ENTER',
            text: 'Positionen',
            action: 'open',
            available: hasSelection,
            primary: true
          }
        ];
        
        if (showPdfExport && hasSelection) {
          actions.push({
            key: 'P',
            text: 'PDF Export',
            action: 'pdf',
            available: true,
            primary: false
          });
        }
        
        actions.push({
          key: 'D',
          text: 'Löschen',
          action: 'delete',
          available: hasSelection,
          danger: true
        });
        
        return actions;
        
      default:
        return [];
    }
  };

  const actions = getContextActions();
  
  if (actions.length === 0) {
    return null;
  }

  return (
    <ContextMenuContainer>
      {actions.map((action, index) => (
        <React.Fragment key={action.key}>
          <ContextAction
            className={`
              ${action.available ? 'available' : ''} 
              ${action.primary ? 'primary' : ''} 
              ${action.danger ? 'danger' : ''}
            `}
            onClick={() => action.available && handleActionClick(action.action)}
          >
            <KeyBadge>{action.key}</KeyBadge>
            <ActionText>{action.text}</ActionText>
          </ContextAction>
          {index < actions.length - 1 && <Separator />}
        </React.Fragment>
      ))}
    </ContextMenuContainer>
  );
};

export default ContextMenu;