import React, { useEffect } from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.sm};
  padding: ${props => props.theme.spacing.md};
  background: ${props => props.theme.colors.bgSecondary};
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  
  @media (max-width: 768px) {
    gap: 8px;
    padding: 12px;
  }
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  background: ${props => props.$active 
    ? props.theme.colors.accentGreen 
    : props.theme.colors.bgTertiary};
  color: ${props => props.$active 
    ? props.theme.colors.bgPrimary 
    : props.theme.colors.textSecondary};
  border: 2px solid ${props => props.$active 
    ? props.theme.colors.accentGreen 
    : props.theme.colors.borderColor};
  border-radius: ${props => props.theme.borderRadius.md};
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.base};
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: ${props => props.$active ? 'bold' : 'normal'};
  
  @media (max-width: 768px) {
    padding: 12px 16px;
    min-height: 48px;
    font-size: 16px;
  }
  
  &:hover {
    background: ${props => props.$active 
      ? props.theme.colors.accentGreen 
      : props.theme.colors.bgHover};
    border-color: ${props => props.$active 
      ? props.theme.colors.accentGreen 
      : props.theme.colors.accentBlue};
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:focus {
    outline: none;
  }
`;

const Shortcut = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  padding: 2px 6px;
  background: ${props => props.$active 
    ? props.theme.colors.bgPrimary 
    : props.theme.colors.bgSecondary};
  color: ${props => props.$active 
    ? props.theme.colors.accentGreen 
    : props.theme.colors.textSecondary};
  border-radius: ${props => props.theme.borderRadius.sm};
  font-size: 0.75rem;
  font-weight: bold;
  margin-left: ${props => props.theme.spacing.xs};
`;

const Count = styled.span`
  opacity: 0.8;
  font-size: 0.875rem;
  margin-left: ${props => props.theme.spacing.xs};
`;

const defaultStatusOptions = [
  { value: 'alle', label: 'Alle', shortcut: '0' },
  { value: 'entwurf', label: 'Entwurf', shortcut: '1' },
  { value: 'versendet', label: 'Versendet', shortcut: '2' },
  { value: 'angenommen', label: 'Angenommen', shortcut: '3' },
  { value: 'abgelehnt', label: 'Abgelehnt', shortcut: '4' }
];

const StatusFilter = ({ activeFilter, onFilterChange, allOfferten = [], statusOptions = defaultStatusOptions }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Nur wenn keine Modals offen sind
      if (event.target.tagName === 'INPUT' || 
          event.target.tagName === 'TEXTAREA' || 
          event.target.tagName === 'SELECT') {
        return;
      }
      
      const pressedKey = event.key;
      const option = statusOptions.find(opt => opt.shortcut === pressedKey);
      
      if (option) {
        event.preventDefault();
        onFilterChange(option.value);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onFilterChange]);

  const getCountForStatus = (status) => {
    if (!allOfferten || allOfferten.length === 0) return 0;
    if (status === 'alle') return allOfferten.length;
    return allOfferten.filter(offerte => offerte.status === status).length;
  };

  return (
    <FilterContainer>
      {statusOptions.map(option => (
        <FilterButton
          key={option.value}
          $active={activeFilter === option.value}
          onClick={() => onFilterChange(option.value)}
        >
          {option.label}
          <Shortcut $active={activeFilter === option.value}>
            {option.shortcut}
          </Shortcut>
          <Count>({getCountForStatus(option.value)})</Count>
        </FilterButton>
      ))}
    </FilterContainer>
  );
};

export default StatusFilter;
