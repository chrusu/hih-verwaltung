import React from 'react';
import styled from 'styled-components';
import { theme } from '../../themes/terminal';

const Container = styled.div`
  flex: 1;
  padding: ${theme.spacing.lg};
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  min-height: 0; /* Important for flex scrolling */
`;

const ContentArea = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ContentArea;