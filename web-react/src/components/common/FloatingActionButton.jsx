/**
 * Floating Action Button (FAB)
 * Mobile-only Button für Hauptaktionen (Neu erstellen)
 */

import React from 'react';
import styled from 'styled-components';
import { theme } from '../../themes/terminal';

const FABContainer = styled.button`
  /* Desktop: Verstecken */
  display: none;
  
  /* Mobile: Floating Button rechts oben */
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 60px; /* Unter TitleBar */
    right: 16px;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: ${theme.colors.accentGreen};
    border: 2px solid ${theme.colors.bgPrimary};
    box-shadow: 0 2px 8px rgba(85, 255, 85, 0.4), 
                0 1px 4px rgba(0, 0, 0, 0.6);
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 900;
    
    /* Icon */
    font-size: 24px;
    color: ${theme.colors.bgPrimary};
    font-weight: bold;
    line-height: 1;
    
    &:active {
      transform: scale(0.9);
      box-shadow: 0 2px 6px rgba(85, 255, 85, 0.3), 
                  0 1px 4px rgba(0, 0, 0, 0.4);
    }
    
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;

const FloatingActionButton = ({ onClick, disabled = false, icon = '+' }) => {
  return (
    <FABContainer onClick={onClick} disabled={disabled} aria-label="Neu erstellen">
      {icon}
    </FABContainer>
  );
};

export default FloatingActionButton;
