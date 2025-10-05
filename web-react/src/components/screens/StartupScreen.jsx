import React from 'react';
import styled from 'styled-components';
import { theme } from '../../themes/terminal';

const StartupContainer = styled.div`
  padding: ${theme.spacing.xl};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LogoSection = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing.xl};
`;

const LogoText = styled.h1`
  color: ${theme.colors.accentPurple};
  margin: 0 0 ${theme.spacing.md} 0;
  font-size: ${theme.fontSizes.md};
  font-weight: ${theme.fontWeights.normal};
`;

const Subtitle = styled.h2`
  color: ${theme.colors.accentCyan};
  margin: 0;
  font-size: ${theme.fontSizes.lg};
  font-weight: ${theme.fontWeights.medium};
`;

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.xl};
  margin-bottom: ${theme.spacing.xl};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.lg};
  }
`;

const DashboardSection = styled.div`
  h3 {
    color: ${theme.colors.accentGreen};
    margin: 0 0 ${theme.spacing.md} 0;
    font-size: ${theme.fontSizes.base};
    font-weight: ${theme.fontWeights.semibold};
    display: flex;
    align-items: center;
    gap: ${theme.spacing.sm};
  }
`;

const StatsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
`;

const StatItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing.xs} 0;
  border-bottom: 1px solid ${theme.colors.bgTertiary};
  
  &:last-child {
    border-bottom: none;
  }
`;

const StatLabel = styled.span`
  color: ${theme.colors.textSecondary};
  font-size: ${theme.fontSizes.md};
`;

const StatValue = styled.span`
  color: ${theme.colors.accentBlue};
  font-weight: ${theme.fontWeights.semibold};
  font-size: ${theme.fontSizes.base};
  
  &.ready {
    color: ${theme.colors.success};
  }
`;

const QuickAccess = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
`;

const QuickItem = styled.div`
  color: ${theme.colors.textPrimary};
  padding: ${theme.spacing.xs} 0;
  font-size: ${theme.fontSizes.md};
  border-bottom: 1px solid ${theme.colors.bgTertiary};
  
  &:last-child {
    border-bottom: none;
  }
`;

const StartupFooter = styled.div`
  text-align: center;
  color: ${theme.colors.textSecondary};
  font-style: italic;
  margin-top: auto;
  
  p {
    margin: 0;
    font-size: ${theme.fontSizes.md};
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
        <LogoText>╔══════════════════════════════════════════════════════════════════╗</LogoText>
        <LogoText>║                    HIH-VERWALTUNG v2.0                           ║</LogoText>
        <LogoText>╚══════════════════════════════════════════════════════════════════╝</LogoText>
        <Subtitle>Business Management Terminal</Subtitle>
      </LogoSection>

      <DashboardGrid>
        <DashboardSection>
          <h3>📊 System Status</h3>
          <StatsGrid>
            <StatItem>
              <StatLabel>Kunden:</StatLabel>
              <StatValue>{defaultStats.kunden}</StatValue>
            </StatItem>
            <StatItem>
              <StatLabel>Offerten:</StatLabel>
              <StatValue>{defaultStats.offerten}</StatValue>
            </StatItem>
            <StatItem>
              <StatLabel>Rechnungen:</StatLabel>
              <StatValue>{defaultStats.rechnungen}</StatValue>
            </StatItem>
            <StatItem>
              <StatLabel>Status:</StatLabel>
              <StatValue className="ready">{defaultStats.status}</StatValue>
            </StatItem>
          </StatsGrid>
        </DashboardSection>

        <DashboardSection>
          <h3>⚡ Schnellzugriff</h3>
          <QuickAccess>
            <QuickItem>F2 → Kundenverwaltung</QuickItem>
            <QuickItem>F3 → Offertenverwaltung</QuickItem>
            <QuickItem>F4 → Rechnungserstellung</QuickItem>
            <QuickItem>F6 → PDF-Export</QuickItem>
            <QuickItem>F5 → Daten aktualisieren</QuickItem>
          </QuickAccess>
        </DashboardSection>
      </DashboardGrid>

      <StartupFooter>
        <p>Verwende die F-Tasten für die Navigation • ESC für Zurück</p>
      </StartupFooter>
    </StartupContainer>
  );
};

export default StartupScreen;