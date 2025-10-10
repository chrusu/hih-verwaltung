import React from 'react';
import styled from 'styled-components';
import { theme } from '../../themes/terminal';
import { useAuth } from '../../hooks/useAuth';

const TitleBarContainer = styled.div`
  background: ${theme.colors.bgTertiary};
  border-bottom: 1px solid ${theme.colors.borderColor};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 36px;
`;

const TitleContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: ${theme.spacing.md};
`;

const TitleText = styled.h1`
  color: ${theme.colors.accentBlue};
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.lg};
  letter-spacing: ${theme.letterSpacing.wide};
  margin: 0;
  flex: 1;
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  background: ${theme.colors.bgPrimary};
  border: 1px solid ${theme.colors.borderColor};
  border-radius: ${theme.borderRadius.base};
`;

const UserIcon = styled.span`
  color: ${theme.colors.accentGreen};
  font-size: ${theme.fontSizes.md};
`;

const UserName = styled.span`
  color: ${theme.colors.textPrimary};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.medium};
`;

const LogoutButton = styled.button`
  background: transparent;
  border: 1px solid ${theme.colors.borderColor};
  color: ${theme.colors.textSecondary};
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.base};
  font-size: ${theme.fontSizes.sm};
  cursor: pointer;
  transition: ${theme.transitions.normal};
  font-family: ${theme.fonts.mono};
  
  &:hover {
    border-color: ${theme.colors.accentRed};
    color: ${theme.colors.accentRed};
    background: rgba(255, 68, 68, 0.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

const WindowControls = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
`;

const Control = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.fontSizes.md};
  font-weight: ${theme.fontWeights.bold};
  cursor: pointer;
  transition: ${theme.transitions.normal};
  
  &.minimize {
    background: ${theme.colors.accentYellow};
    color: ${theme.colors.bgPrimary};
  }
  
  &.maximize {
    background: ${theme.colors.accentGreen};
    color: ${theme.colors.bgPrimary};
  }
  
  &.close {
    background: ${theme.colors.accentRed};
    color: ${theme.colors.bgPrimary};
  }
  
  &:hover {
    transform: scale(1.1);
  }
`;

const TitleBar = ({ title = "HIH-Verwaltung Terminal Edition" }) => {
  const { user, logout } = useAuth();
  
  const handleLogout = () => {
    if (window.confirm('Möchtest du dich wirklich abmelden?')) {
      logout();
    }
  };
  
  return (
    <TitleBarContainer>
      <TitleContent>
        <TitleText>{title}</TitleText>
        {user && (
          <UserSection>
            <UserInfo>
              <UserIcon>👤</UserIcon>
              <UserName>{user.name}</UserName>
            </UserInfo>
            <LogoutButton onClick={handleLogout}>
              Logout
            </LogoutButton>
          </UserSection>
        )}
      </TitleContent>
    </TitleBarContainer>
  );
};

export default TitleBar;