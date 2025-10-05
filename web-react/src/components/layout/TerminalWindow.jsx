import React from 'react';
import styled from 'styled-components';
import { theme, mixins } from '../../themes/terminal';

const WindowContainer = styled.div`
  ${mixins.terminalWindow}
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const WindowHeader = styled.div`
  background: ${theme.colors.bgTertiary};
  border-bottom: 1px solid ${theme.colors.borderColor};
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WindowTitle = styled.h2`
  color: ${theme.colors.accentBlue};
  margin: 0;
  font-size: ${theme.fontSizes.lg};
  font-weight: ${theme.fontWeights.bold};
  text-transform: uppercase;
  letter-spacing: ${theme.letterSpacing.widest};
`;

const WindowBody = styled.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const TerminalWindow = ({ title, children, className }) => {
  return (
    <WindowContainer className={className}>
      <WindowHeader>
        <WindowTitle>{title}</WindowTitle>
      </WindowHeader>
      <WindowBody>{children}</WindowBody>
    </WindowContainer>
  );
};

export default TerminalWindow;