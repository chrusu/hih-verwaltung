import React from 'react';
import styled from 'styled-components';
import { theme } from '../../themes/terminal';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  background: ${theme.colors.bgPrimary};
  font-family: ${theme.fonts.mono};
  font-size: ${theme.fontSizes.base};
  line-height: ${theme.lineHeights.normal};
  color: ${theme.colors.textPrimary};
  overflow: hidden;
  user-select: none;
  cursor: default;
  position: absolute;
  top: 0;
  left: 0;
  
  /* Mobile Safari viewport fix */
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
  
  /* Android Chrome viewport fix */
  @media (max-width: 768px) {
    height: 100dvh; /* Dynamic viewport height */
    padding-bottom: max(env(safe-area-inset-bottom), 20px); /* Extra padding for Android */
  }
`;

const TerminalContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default TerminalContainer;