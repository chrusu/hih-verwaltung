import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { theme } from '../../themes/terminal';
import { FKeyButton, FKeyLabel as FKeyLabelStyled, FKeyText } from '../common/Buttons';

const FKeyContainer = styled.div`
  background: ${theme.colors.bgSecondary};
  border-top: 3px solid ${theme.colors.accentBlue};
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  margin-top: 0;
  margin-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: ${theme.spacing.md};
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
          <FKeyButton
            key={key}
            className={currentScreen === action ? 'active' : ''}
            onClick={() => handleFKeyClick(action)}
          >
            <FKeyLabelStyled>{key}</FKeyLabelStyled>
            <FKeyText>{label}</FKeyText>
          </FKeyButton>
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