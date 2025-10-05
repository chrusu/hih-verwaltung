import React from 'react';
import styled from 'styled-components';
import { theme } from '../../themes/terminal';

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
`;

const TitleText = styled.h1`
  color: ${theme.colors.accentBlue};
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.lg};
  letter-spacing: ${theme.letterSpacing.wide};
  margin: 0;
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
  return (
    <TitleBarContainer>
      <TitleContent>
        <TitleText>{title}</TitleText>
      </TitleContent>
    </TitleBarContainer>
  );
};

export default TitleBar;