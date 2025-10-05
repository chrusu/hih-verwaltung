import React, { useEffect } from 'react';
import styled from 'styled-components';
import { theme } from '../../themes/terminal';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: ${theme.spacing.lg};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.sm};
  }
`;

const ModalContainer = styled.div`
  background: ${theme.colors.bgPrimary};
  border: 2px solid ${theme.colors.borderColor};
  border-radius: ${theme.borderRadius.sm};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  max-width: ${props => props.wide ? '1200px' : '600px'};
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  
  /* Terminal-Style Shadow */
  box-shadow: 
    0 0 0 1px ${theme.colors.borderColor},
    2px 2px 0 ${theme.colors.bgTertiary};

  @media (max-width: ${theme.breakpoints.mobile}) {
    max-width: 95vw;
    max-height: 95vh;
  }
`;

const ModalHeader = styled.div`
  background: ${theme.colors.bgSecondary};
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border-bottom: 1px solid ${theme.colors.borderColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ModalTitle = styled.h2`
  color: ${theme.colors.accentCyan};
  font-size: ${theme.fontSizes.lg};
  font-weight: ${theme.fontWeights.semibold};
  margin: 0;
  font-family: ${theme.fonts.mono};
  text-transform: uppercase;
  letter-spacing: ${theme.letterSpacing.wide};
`;

const CloseButton = styled.button`
  background: transparent;
  border: 1px solid ${theme.colors.borderColor};
  color: ${theme.colors.textPrimary};
  width: 30px;
  height: 30px;
  border-radius: ${theme.borderRadius.sm};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.fontSizes.lg};
  font-weight: bold;
  
  /* Mobile touch optimization */
  @media (max-width: 768px) {
    width: 52px;
    height: 52px;
    font-size: 20px;
    border: 2px solid ${theme.colors.borderColor};
  }
  
  &:hover {
    background: ${theme.colors.bgTertiary};
    color: ${theme.colors.accentRed};
    border-color: ${theme.colors.accentRed};
  }
  
  &:active {
    transform: translateY(1px);
  }
`;

const ModalContent = styled.div`
  padding: ${theme.spacing.lg};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.xl};
  }
  
  /* Enhanced form styling for mobile */
  @media (max-width: 768px) {
    input, textarea, select {
      width: 100%;
      box-sizing: border-box;
      margin-bottom: 16px;
    }
    
    label {
      display: block;
      margin-bottom: 8px;
      font-weight: bold;
      font-size: 16px;
    }
    
    button {
      margin: 8px;
      min-width: 140px;
    }
  }
`;

const BaseModal = ({ 
  isOpen, 
  onClose, 
  title, 
  children,
  closeOnOverlay = true,
  wide = false
}) => {
  // Handle ESC key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27 && onClose) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc, false);
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc, false);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget && closeOnOverlay && onClose) {
      onClose();
    }
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContainer wide={wide}>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <CloseButton onClick={onClose} aria-label="Schließen">
            ×
          </CloseButton>
        </ModalHeader>
        <ModalContent>
          {children}
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default BaseModal;