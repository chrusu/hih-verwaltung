import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${props => props.theme.colors.bgSecondary};
  border: 2px solid ${props => props.theme.colors.accentGreen};
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => props.theme.spacing.sm};
  z-index: 1000;
  min-width: 300px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`;

const MenuTitle = styled.div`
  color: ${props => props.theme.colors.accentGreen};
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: ${props => props.theme.spacing.sm};
  padding-bottom: ${props => props.theme.spacing.xs};
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
`;

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.xs};
`;

const MenuItem = styled.button`
  background: ${props => props.$selected 
    ? props.theme.colors.accentGreen 
    : props.theme.colors.bgTertiary};
  color: ${props => props.$selected 
    ? props.theme.colors.bgPrimary 
    : props.theme.colors.textPrimary};
  border: 1px solid ${props => props.$selected 
    ? props.theme.colors.accentGreen 
    : props.theme.colors.borderColor};
  padding: ${props => props.theme.spacing.sm};
  font-family: ${props => props.theme.fonts.mono};
  font-size: 1rem;
  cursor: pointer;
  text-align: left;
  border-radius: ${props => props.theme.borderRadius.sm};
  transition: all 0.2s;

  &:hover {
    background: ${props => props.$selected 
      ? props.theme.colors.accentGreen 
      : props.theme.colors.borderColor};
  }

  &:focus {
    outline: none;
  }
`;

const Hint = styled.div`
  margin-top: ${props => props.theme.spacing.sm};
  padding-top: ${props => props.theme.spacing.xs};
  border-top: 1px solid ${props => props.theme.colors.borderColor};
  font-size: 0.875rem;
  color: ${props => props.theme.colors.textSecondary};
  text-align: center;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const statusOptions = {
  offers: [
    { value: 'entwurf', label: 'Entwurf' },
    { value: 'versendet', label: 'Versendet' },
    { value: 'angenommen', label: 'Angenommen' },
    { value: 'abgelehnt', label: 'Abgelehnt' }
  ],
  invoices: [
    { value: 'entwurf', label: 'Entwurf' },
    { value: 'fertig', label: 'Fertig' },
    { value: 'gesendet', label: 'Gesendet' },
    { value: 'bezahlt', label: 'Bezahlt' }
  ]
};

const StatusChangeMenu = ({ currentStatus, onStatusChange, onClose, entityType = 'offers' }) => {
  const options = statusOptions[entityType] || statusOptions.offers;
  const [selectedIndex, setSelectedIndex] = useState(
    options.findIndex(opt => opt.value === currentStatus)
  );
  const menuRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowUp':
          event.preventDefault();
          setSelectedIndex(prev => Math.max(0, prev - 1));
          break;
          
        case 'ArrowDown':
          event.preventDefault();
          setSelectedIndex(prev => Math.min(options.length - 1, prev + 1));
          break;
          
        case 'Enter':
          event.preventDefault();
          onStatusChange(options[selectedIndex].value);
          break;
          
        case 'Escape':
          event.preventDefault();
          onClose();
          break;
          
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, onStatusChange, onClose, options]);

  return (
    <>
      <Overlay onClick={onClose} />
      <MenuContainer ref={menuRef}>
        <MenuTitle>Status wechseln</MenuTitle>
        <MenuList>
          {options.map((option, index) => (
            <MenuItem
              key={option.value}
              $selected={index === selectedIndex}
              onClick={() => onStatusChange(option.value)}
            >
              {option.label}
            </MenuItem>
          ))}
        </MenuList>
        <Hint>↑↓ Navigation | Enter=Auswählen | Esc=Abbrechen</Hint>
      </MenuContainer>
    </>
  );
};

export default StatusChangeMenu;
