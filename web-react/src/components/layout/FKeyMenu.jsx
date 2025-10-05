import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { theme } from '../../themes/terminal';

const FKeyContainer = styled.div`
  background: ${theme.colors.bgTertiary};
  border-top: 2px solid ${theme.colors.borderColor};
  padding: ${theme.spacing.sm} 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: ${theme.spacing.xs};
  
  /* Mobile improvements */
  @media (max-width: 768px) {
    padding: ${theme.spacing.md} ${theme.spacing.sm};
    padding-bottom: max(calc(${theme.spacing.md} + env(safe-area-inset-bottom)), 25px);
    gap: ${theme.spacing.sm};
  }
`;

const FKeyItem = styled.div`
  display: flex;
  align-items: center;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  cursor: pointer;
  transition: ${theme.transitions.normal};
  border-radius: ${theme.borderRadius.base};
  font-size: ${theme.fontSizes.sm};
  
  /* Mobile touch targets - Enhanced */
  @media (max-width: 768px) {
    padding: 18px 24px;
    font-size: 18px;
    min-height: 52px; /* Increased from 44px for better touch */
    min-width: 120px;
    border: 2px solid ${theme.colors.borderColor};
    margin: 4px 2px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  &:hover {
    background: ${theme.colors.bgHover};
  }
  
  &.active {
    background: ${theme.colors.accentBlue};
    color: ${theme.colors.bgPrimary};
  }
`;

const FKeyKey = styled.span`
  background: ${theme.colors.bgPrimary};
  color: ${theme.colors.accentBlue};
  padding: 2px 6px;
  border-radius: 3px;
  font-weight: ${theme.fontWeights.bold};
  margin-right: ${theme.spacing.xs};
  font-size: ${theme.fontSizes.xs};
  border: 1px solid ${theme.colors.borderColor};
  
  /* Mobile enhancements */
  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 14px;
    font-weight: ${theme.fontWeights.bold};
    margin-right: 8px;
    border-radius: 6px;
  }
  
  .active & {
    background: ${theme.colors.bgPrimary};
    color: ${theme.colors.accentBlue};
  }
`;

const FKeyLabel = styled.span``;

const StatusBar = styled.div`
  background: ${theme.colors.bgTertiary};
  border-top: 1px solid ${theme.colors.borderColor};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${theme.fontSizes.sm};
  min-height: 32px;
  
  /* Mobile improvements */
  @media (max-width: 768px) {
    padding: ${theme.spacing.md} ${theme.spacing.lg};
    padding-bottom: max(calc(${theme.spacing.md} + env(safe-area-inset-bottom)), 25px);
    font-size: ${theme.fontSizes.base};
    min-height: 48px;
  }
`;

const StatusMessage = styled.div`
  color: ${theme.colors.textSecondary};
  flex: 1;
`;

const StatusTime = styled.div`
  color: ${theme.colors.accentCyan};
  font-weight: ${theme.fontWeights.medium};
`;

const fKeyMap = [
  { key: 'F1', label: 'Hilfe', action: 'help' },
  { key: 'F2', label: 'Kunden', action: 'customers' },
  { key: 'F3', label: 'Offerten', action: 'offers' },
  { key: 'F4', label: 'Rechnung', action: 'invoices' },
  { key: 'F5', label: 'Aktualisieren', action: 'refresh' },
  { key: 'F10', label: 'Hauptmenü', action: 'startup' },
];

const FKeyMenu = ({ currentScreen, onFKeyPress, statusMessage }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleFKeyClick = (action) => {
    if (onFKeyPress) {
      onFKeyPress(action);
    }
  };

  const handleKeyPress = (event) => {
    const fKey = fKeyMap.find(item => 
      event.key === item.key || 
      event.code === item.key ||
      event.key === `F${item.key.slice(1)}`
    );
    
    if (fKey) {
      event.preventDefault();
      handleFKeyClick(fKey.action);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <>
      <FKeyContainer>
        {fKeyMap.map(({ key, label, action }) => (
          <FKeyItem
            key={key}
            className={currentScreen === action ? 'active' : ''}
            onClick={() => handleFKeyClick(action)}
          >
            <FKeyKey>{key}</FKeyKey>
            <FKeyLabel>{label}</FKeyLabel>
          </FKeyItem>
        ))}
      </FKeyContainer>
      
      <StatusBar>
        <StatusMessage>{statusMessage || 'System bereit - F-Tasten für Navigation'}</StatusMessage>
        <StatusTime>{currentTime.toLocaleTimeString()}</StatusTime>
      </StatusBar>
    </>
  );
};

export default FKeyMenu;