import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { theme } from '../../themes/terminal';

const FKeyContainer = styled.div`
  background: ${theme.colors.bgSecondary};
  border-top: 3px solid ${theme.colors.accentBlue};
  padding: ${theme.spacing.xl} ${theme.spacing.lg};
  margin-top: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.lg};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: ${theme.spacing.lg};
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.2);
  
  /* Mobile improvements */
  @media (max-width: 768px) {
    padding: ${theme.spacing.md} ${theme.spacing.sm};
    padding-bottom: max(calc(${theme.spacing.md} + env(safe-area-inset-bottom)), 25px);
    gap: ${theme.spacing.sm};
    margin-top: ${theme.spacing.sm};
    margin-bottom: 0;
  }
`;

const FKeyItem = styled.button`
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
  
  /* Mobile touch targets - Enhanced */
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

const FKeyKey = styled.span`
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

const FKeyLabel = styled.span`
  font-weight: ${theme.fontWeights.medium};
  letter-spacing: ${theme.letterSpacing.normal};
  
  .active & {
    font-weight: ${theme.fontWeights.bold};
  }
`;

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