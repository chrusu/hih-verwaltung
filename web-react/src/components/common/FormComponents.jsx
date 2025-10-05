import styled from 'styled-components';
import { theme } from '../../themes/terminal';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`;

export const FormSectionTitle = styled.h3`
  color: ${theme.colors.accentYellow};
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.semibold};
  margin: 0;
  padding-bottom: ${theme.spacing.xs};
  border-bottom: 1px solid ${theme.colors.borderColor};
  text-transform: uppercase;
  letter-spacing: ${theme.letterSpacing.wide};
`;

export const FormRow = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${theme.spacing.sm};
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
  flex: ${props => props.flex || 1};
`;

export const Label = styled.label`
  color: ${theme.colors.textPrimary};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.medium};
  text-transform: uppercase;
  letter-spacing: ${theme.letterSpacing.wide};
  
  ${props => props.required && `
    &::after {
      content: ' *';
      color: ${theme.colors.accentRed};
    }
  `}
`;

export const Input = styled.input`
  background: ${theme.colors.bgTertiary};
  border: 1px solid ${theme.colors.borderColor};
  border-radius: ${theme.borderRadius.sm};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  color: ${theme.colors.textPrimary};
  font-size: ${theme.fontSizes.md};
  font-family: ${theme.fonts.mono};
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.accentBlue};
    box-shadow: 0 0 0 2px ${theme.colors.accentBlue}33;
  }
  
  &:disabled {
    background: ${theme.colors.bgSecondary};
    color: ${theme.colors.textSecondary};
    cursor: not-allowed;
  }
  
  &::placeholder {
    color: ${theme.colors.textSecondary};
  }
`;

export const TextArea = styled.textarea`
  background: ${theme.colors.bgTertiary};
  border: 1px solid ${theme.colors.borderColor};
  border-radius: ${theme.borderRadius.sm};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  color: ${theme.colors.textPrimary};
  font-size: ${theme.fontSizes.md};
  font-family: ${theme.fonts.mono};
  min-height: 80px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.accentBlue};
    box-shadow: 0 0 0 2px ${theme.colors.accentBlue}33;
  }
  
  &:disabled {
    background: ${theme.colors.bgSecondary};
    color: ${theme.colors.textSecondary};
    cursor: not-allowed;
  }
  
  &::placeholder {
    color: ${theme.colors.textSecondary};
  }
`;

export const Select = styled.select`
  background: ${theme.colors.bgTertiary};
  border: 1px solid ${theme.colors.borderColor};
  border-radius: ${theme.borderRadius.sm};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  color: ${theme.colors.textPrimary};
  font-size: ${theme.fontSizes.md};
  font-family: ${theme.fonts.mono};
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.accentBlue};
    box-shadow: 0 0 0 2px ${theme.colors.accentBlue}33;
  }
  
  &:disabled {
    background: ${theme.colors.bgSecondary};
    color: ${theme.colors.textSecondary};
    cursor: not-allowed;
  }
  
  option {
    background: ${theme.colors.bgTertiary};
    color: ${theme.colors.textPrimary};
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  justify-content: flex-end;
  margin-top: ${theme.spacing.xl};
  padding-top: ${theme.spacing.lg};
  border-top: 1px solid ${theme.colors.borderColor};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${theme.spacing.sm};
  }
`;

export const Button = styled.button`
  background: ${props => {
    if (props.variant === 'primary') return theme.colors.accentBlue;
    if (props.variant === 'danger') return theme.colors.accentRed;
    if (props.variant === 'success') return theme.colors.accentGreen;
    return theme.colors.bgTertiary;
  }};
  
  border: 1px solid ${props => {
    if (props.variant === 'primary') return theme.colors.accentBlue;
    if (props.variant === 'danger') return theme.colors.accentRed;
    if (props.variant === 'success') return theme.colors.accentGreen;
    return theme.colors.borderColor;
  }};
  
  color: ${props => {
    if (props.variant === 'primary' || props.variant === 'danger' || props.variant === 'success') {
      return theme.colors.bgPrimary;
    }
    return theme.colors.textPrimary;
  }};
  
  border-radius: ${theme.borderRadius.sm};
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  font-size: ${theme.fontSizes.md};
  font-weight: ${theme.fontWeights.medium};
  font-family: ${theme.fonts.mono};
  text-transform: uppercase;
  letter-spacing: ${theme.letterSpacing.wide};
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 100px;
  
  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.md};
    min-width: unset;
  }
`;

export const ErrorMessage = styled.div`
  color: ${theme.colors.accentRed};
  font-size: ${theme.fontSizes.sm};
  margin-top: ${theme.spacing.xs};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  
  &::before {
    content: '⚠';
    font-size: ${theme.fontSizes.base};
  }
`;