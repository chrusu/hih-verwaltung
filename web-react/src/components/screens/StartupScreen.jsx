import React from 'react';
import styled from 'styled-components';
import { theme } from '../../themes/terminal';

const StartupContainer = styled.div`
  padding: ${theme.spacing.xl};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
`;

const LogoSection = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing.xl};
`;

const ASCIIArt = styled.pre`
  color: ${theme.colors.accentPurple};
  font-family: ${theme.fonts.mono};
  font-size: 24px;
  line-height: 1;
  margin: 0 0 ${theme.spacing.lg} 0;
  text-align: center;
  user-select: none;
  letter-spacing: -2px;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 16px;
    letter-spacing: -1px;
  }
`;

const Subtitle = styled.h2`
  color: ${theme.colors.accentCyan};
  margin: 0;
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.medium};
  letter-spacing: ${theme.letterSpacing.wide};
  text-transform: uppercase;
  text-align: center;
`;

const DashboardGrid = styled.div`
  display: flex;
  gap: ${theme.spacing.xl};
  margin: ${theme.spacing.xl} 0;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${theme.spacing.lg};
  }
`;

const DashboardSection = styled.div`
  background: ${theme.colors.bgSecondary};
  border: 2px solid ${theme.colors.borderColor};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  min-width: 300px;
  max-width: 400px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    border-color: ${theme.colors.accentBlue};
    box-shadow: 0 6px 16px rgba(74, 158, 255, 0.2);
    transform: translateY(-2px);
  }
  
  h3 {
    color: ${theme.colors.accentGreen};
    margin: 0 0 ${theme.spacing.lg} 0;
    font-size: ${theme.fontSizes.lg};
    font-weight: ${theme.fontWeights.bold};
    display: flex;
    align-items: center;
    gap: ${theme.spacing.sm};
    padding-bottom: ${theme.spacing.md};
    border-bottom: 2px solid ${theme.colors.bgTertiary};
    letter-spacing: ${theme.letterSpacing.normal};
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    min-width: unset;
    max-width: unset;
    width: 100%;
  }
`;

const StatsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`;

const StatItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  background: ${theme.colors.bgTertiary};
  border-radius: ${theme.borderRadius.base};
  border-left: 3px solid ${theme.colors.accentBlue};
  transition: all 0.2s ease;
  
  &:hover {
    background: ${theme.colors.bgHover};
    border-left-color: ${theme.colors.accentCyan};
    transform: translateX(4px);
  }
`;

const StatLabel = styled.span`
  color: ${theme.colors.textSecondary};
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.medium};
`;

const StatValue = styled.span`
  color: ${theme.colors.accentBlue};
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.lg};
  font-family: ${theme.fonts.mono};
  
  &.ready {
    color: ${theme.colors.success};
  }
`;

const QuickAccess = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
`;

const QuickItem = styled.div`
  color: ${theme.colors.textPrimary};
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  font-size: ${theme.fontSizes.base};
  background: ${theme.colors.bgTertiary};
  border-radius: ${theme.borderRadius.base};
  border-left: 3px solid ${theme.colors.accentYellow};
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:hover {
    background: ${theme.colors.bgHover};
    border-left-color: ${theme.colors.accentGreen};
    transform: translateX(4px);
  }
  
  strong {
    color: ${theme.colors.accentYellow};
    font-weight: ${theme.fontWeights.bold};
  }
`;

const StartupFooter = styled.div`
  text-align: center;
  color: ${theme.colors.textSecondary};
  font-style: italic;
  margin-top: ${theme.spacing.xl};
  padding-top: ${theme.spacing.xl};
  border-top: 1px solid ${theme.colors.borderColor};
  
  p {
    margin: 0;
    font-size: ${theme.fontSizes.base};
    letter-spacing: ${theme.letterSpacing.normal};
  }
`;

const StartupScreen = ({ stats = {} }) => {
  const defaultStats = {
    kunden: 0,
    offerten: 0,
    rechnungen: 0,
    status: 'System bereit',
    ...stats
  };

  return (
    <StartupContainer>
      <LogoSection>
        <ASCIIArt>{`
    ██╗  ██╗██╗██╗  ██╗
    ██║  ██║██║██║  ██║  
    ███████║██║███████║
    ██╔══██║██║██╔══██║
    ██║  ██║██║██║  ██║
    ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝
        `}</ASCIIArt>
        <Subtitle>HIH-Verwaltung v2.0</Subtitle>
      </LogoSection>

      <DashboardGrid>
        <DashboardSection>
          <h3>📊 System Status</h3>
          <StatsGrid>
            <StatItem>
              <StatLabel>Kunden</StatLabel>
              <StatValue>{defaultStats.kunden}</StatValue>
            </StatItem>
            <StatItem>
              <StatLabel>Offerten</StatLabel>
              <StatValue>{defaultStats.offerten}</StatValue>
            </StatItem>
            <StatItem>
              <StatLabel>Rechnungen</StatLabel>
              <StatValue>{defaultStats.rechnungen}</StatValue>
            </StatItem>
            <StatItem>
              <StatLabel>Status</StatLabel>
              <StatValue className="ready">{defaultStats.status}</StatValue>
            </StatItem>
          </StatsGrid>
        </DashboardSection>

        <DashboardSection>
          <h3>⚡ Schnellzugriff</h3>
          <QuickAccess>
            <QuickItem><strong>F2</strong> → Kundenverwaltung</QuickItem>
            <QuickItem><strong>F3</strong> → Offertenverwaltung</QuickItem>
            <QuickItem><strong>F4</strong> → Rechnungserstellung</QuickItem>
            <QuickItem><strong>F6</strong> → PDF-Export</QuickItem>
            <QuickItem><strong>F5</strong> → Daten aktualisieren</QuickItem>
          </QuickAccess>
        </DashboardSection>
      </DashboardGrid>

      <StartupFooter>
        <p>⌨️  Verwende die F-Tasten für die Navigation  •  ESC für Zurück  •  ↑↓ für Listen</p>
      </StartupFooter>
    </StartupContainer>
  );
};

export default StartupScreen;