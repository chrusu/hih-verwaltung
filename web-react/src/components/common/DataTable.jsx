import React from 'react';
import styled from 'styled-components';
import { theme, mixins } from '../../themes/terminal';

const TableContainer = styled.div`
  flex: 1;
  padding: ${theme.spacing.lg};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  background: ${theme.colors.bgPrimary};
  border-radius: ${theme.borderRadius.base};
  overflow: hidden;
  flex: 1;
  display: table;
  table-layout: fixed;
`;

const TableHead = styled.thead`
  background: ${theme.colors.bgTertiary};
`;

const TableHeaderCell = styled.th`
  color: ${theme.colors.accentCyan};
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  text-align: left;
  border-bottom: 2px solid ${theme.colors.borderColor};
  font-weight: ${theme.fontWeights.semibold};
  font-size: ${theme.fontSizes.sm};
  text-transform: uppercase;
  letter-spacing: ${theme.letterSpacing.wide};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.xs} ${theme.spacing.sm};
    
    /* Hide header cells on mobile except first one */
    &:not(:first-child) {
      display: none;
    }
  }
`;

const TableBody = styled.tbody`
  background: ${theme.colors.bgSecondary};
`;

const TableRow = styled.tr`
  ${mixins.tableRowHover}
  height: auto;
  
  &.selected {
    background: ${theme.colors.bgHover};
    border-left: 3px solid ${theme.colors.accentBlue};
    position: relative;
  }
  
  &.empty-row td {
    text-align: center;
    color: ${theme.colors.textSecondary};
    font-style: italic;
    padding: ${theme.spacing.xl};
    font-size: ${theme.fontSizes.base};
  }
`;

const TableCell = styled.td`
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  color: ${theme.colors.textPrimary};
  vertical-align: top;
  font-size: ${theme.fontSizes.md};
  line-height: ${theme.lineHeights.normal};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.xs} ${theme.spacing.sm};
    
    /* Hide certain cells on mobile except first one */
    &:not(:first-child) {
      display: none;
    }
    
    /* First cell takes full width on mobile */
    &:first-child {
      display: block;
      width: 100%;
    }
  }
`;

// Desktop Layout Components
const DesktopLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    display: none;
  }
`;

// Mobile Layout Components
const MobileLayout = styled.div`
  display: none;
  line-height: ${theme.lineHeights.tight};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    display: block;
  }
`;

const MobileLine = styled.div`
  margin-bottom: 2px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

// Status Badge Component
const StatusBadge = styled.span`
  ${mixins.statusBadge}
  
  &.status-offen {
    background: ${theme.colors.accentYellow};
    color: ${theme.colors.bgPrimary};
  }
  
  &.status-abgeschlossen {
    background: ${theme.colors.accentGreen};
    color: ${theme.colors.bgPrimary};
  }
  
  &.status-abgelehnt {
    background: ${theme.colors.accentRed};
    color: ${theme.colors.bgPrimary};
  }
`;

const DataTable = ({ 
  data = [], 
  columns = [], 
  selectedIndex = 0, 
  onRowClick,
  onDoubleClick,
  emptyMessage = "Keine Daten vorhanden",
  type = "default" 
}) => {
  
  const renderDesktopRow = (item, index) => {
    if (type === 'customers') {
      return (
        <DesktopLayout>
          <div style={{ flex: 2, fontWeight: 'bold', color: theme.colors.accentBlue, marginRight: theme.spacing.sm }}>
            {item.name}
          </div>
          <div style={{ flex: 2, marginRight: theme.spacing.sm }}>
            {item.email}
          </div>
          <div style={{ flex: 1 }}>
            {item.telefon}
          </div>
        </DesktopLayout>
      );
    }
    
    if (type === 'offers') {
      return (
        <DesktopLayout>
          <div style={{ flex: 3, fontWeight: 'bold', color: theme.colors.accentBlue, marginRight: theme.spacing.sm }}>
            {item.titel}
          </div>
          <div style={{ flex: 2, marginRight: theme.spacing.sm }}>
            {item.kundeName || 'Unbekannt'}
          </div>
          <div style={{ flex: 1, fontWeight: 'bold', color: theme.colors.accentGreen, marginRight: theme.spacing.sm, textAlign: 'right' }}>
            CHF {item.gesamtBrutto?.toFixed(2) || '0.00'}
          </div>
          <div style={{ flex: 1, marginRight: theme.spacing.sm, textAlign: 'center' }}>
            <StatusBadge className={`status-${item.status}`}>
              {item.status}
            </StatusBadge>
          </div>
          <div style={{ flex: 1 }}>
            {item.datum ? new Date(item.datum).toLocaleDateString('de-CH') : ''}
          </div>
        </DesktopLayout>
      );
    }
    
    // Default rendering
    return (
      <DesktopLayout>
        {columns.map((col, colIndex) => (
          <div key={colIndex} style={{ flex: col.flex || 1, marginRight: theme.spacing.sm }}>
            {col.render ? col.render(item) : item[col.key]}
          </div>
        ))}
      </DesktopLayout>
    );
  };

  const renderMobileRow = (item, index) => {
    if (type === 'customers') {
      return (
        <MobileLayout>
          <MobileLine style={{ fontWeight: 'bold', color: theme.colors.accentBlue, fontSize: theme.fontSizes.base }}>
            {item.name}
          </MobileLine>
          <MobileLine style={{ color: theme.colors.textSecondary, fontSize: theme.fontSizes.sm }}>
            {item.email}, {item.telefon}
          </MobileLine>
        </MobileLayout>
      );
    }
    
    if (type === 'offers') {
      return (
        <MobileLayout>
          <MobileLine style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontWeight: 'bold', color: theme.colors.accentBlue, fontSize: theme.fontSizes.base, flex: 1, marginRight: theme.spacing.xs }}>
              {item.titel}
            </span>
            <StatusBadge className={`status-${item.status}`} style={{ fontSize: theme.fontSizes.sm, whiteSpace: 'nowrap' }}>
              {item.status}
            </StatusBadge>
          </MobileLine>
          <MobileLine style={{ fontWeight: 'bold', color: theme.colors.accentGreen, fontSize: theme.fontSizes.md, textAlign: 'center', margin: '1px 0' }}>
            CHF {item.gesamtBrutto?.toFixed(2) || '0.00'}
          </MobileLine>
          <MobileLine style={{ display: 'flex', justifyContent: 'space-between', color: theme.colors.textSecondary, fontSize: theme.fontSizes.sm }}>
            <span>{item.kundeName || 'Unbekannt'}</span>
            <span>{item.datum ? new Date(item.datum).toLocaleDateString('de-CH') : ''}</span>
          </MobileLine>
        </MobileLayout>
      );
    }
    
    // Default mobile rendering
    return (
      <MobileLayout>
        {columns.map((col, colIndex) => (
          <MobileLine key={colIndex}>
            <strong>{col.label}:</strong> {col.render ? col.render(item) : item[col.key]}
          </MobileLine>
        ))}
      </MobileLayout>
    );
  };

  const renderTableCells = (item, index) => {
    if (type === 'customers') {
      return (
        <>
          <TableCell>
            {/* Desktop: nur Name */}
            <DesktopLayout>
              <div style={{ fontWeight: 'bold', color: theme.colors.accentBlue }}>
                {item.name}
              </div>
            </DesktopLayout>
            {/* Mobile: Name + zusätzliche Infos */}
            <MobileLayout>
              <MobileLine style={{ fontWeight: 'bold', color: theme.colors.accentBlue, fontSize: theme.fontSizes.base }}>
                {item.name}
              </MobileLine>
              <MobileLine style={{ color: theme.colors.textSecondary, fontSize: theme.fontSizes.sm }}>
                {item.email}, {item.telefon}
              </MobileLine>
            </MobileLayout>
          </TableCell>
          <TableCell>
            {item.email}
          </TableCell>
          <TableCell>
            {item.telefon}
          </TableCell>
        </>
      );
    }
    
    if (type === 'offers') {
      return (
        <>
          <TableCell>
            {/* Desktop: nur Titel */}
            <DesktopLayout>
              <div style={{ fontWeight: 'bold', color: theme.colors.accentBlue }}>
                {item.titel}
              </div>
            </DesktopLayout>
            {/* Mobile: Titel + alle Infos */}
            <MobileLayout>
              <MobileLine style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 'bold', color: theme.colors.accentBlue, fontSize: theme.fontSizes.base, flex: 1, marginRight: theme.spacing.xs }}>
                  {item.titel}
                </span>
                <StatusBadge className={`status-${item.status}`} style={{ fontSize: theme.fontSizes.sm, whiteSpace: 'nowrap' }}>
                  {item.status}
                </StatusBadge>
              </MobileLine>
              <MobileLine style={{ fontWeight: 'bold', color: theme.colors.accentGreen, fontSize: theme.fontSizes.md, textAlign: 'center', margin: '1px 0' }}>
                CHF {item.gesamtBrutto?.toFixed(2) || '0.00'}
              </MobileLine>
              <MobileLine style={{ display: 'flex', justifyContent: 'space-between', color: theme.colors.textSecondary, fontSize: theme.fontSizes.sm }}>
                <span>{item.kundeName || 'Unbekannt'}</span>
                <span>{item.datum ? new Date(item.datum).toLocaleDateString('de-CH') : ''}</span>
              </MobileLine>
            </MobileLayout>
          </TableCell>
          <TableCell>
            {item.kundeName || 'Unbekannt'}
          </TableCell>
          <TableCell style={{ textAlign: 'right' }}>
            <span style={{ fontWeight: 'bold', color: theme.colors.accentGreen }}>
              CHF {item.gesamtBrutto?.toFixed(2) || '0.00'}
            </span>
          </TableCell>
          <TableCell style={{ textAlign: 'center' }}>
            <StatusBadge className={`status-${item.status}`}>
              {item.status}
            </StatusBadge>
          </TableCell>
          <TableCell>
            {item.datum ? new Date(item.datum).toLocaleDateString('de-CH') : ''}
          </TableCell>
        </>
      );
    }
    
    // Default rendering for custom columns
    return columns.map((col, colIndex) => (
      <TableCell key={colIndex}>
        {col.render ? col.render(item) : item[col.key]}
      </TableCell>
    ));
  };

  const getHeaders = () => {
    if (type === 'customers') {
      return ['Name', 'E-Mail', 'Telefon'];
    }
    if (type === 'offers') {
      return ['Titel', 'Kunde', 'Gesamtbetrag', 'Status', 'Datum'];
    }
    return columns.map(col => col.label);
  };

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <tr>
            {getHeaders().map((header, index) => (
              <TableHeaderCell key={index}>{header}</TableHeaderCell>
            ))}
          </tr>
        </TableHead>
        <TableBody>
          {data.length === 0 ? (
            <TableRow className="empty-row">
              <TableCell colSpan={getHeaders().length}>
                {emptyMessage}
              </TableCell>
            </TableRow>
          ) : (
            data.map((item, index) => (
              <TableRow 
                key={item.id || index} 
                className={selectedIndex === index ? 'selected' : ''}
                onClick={() => onRowClick && onRowClick(index)}
                onDoubleClick={() => onDoubleClick && onDoubleClick(item, index)}
                style={{ cursor: onDoubleClick ? 'pointer' : 'default' }}
              >
                {renderTableCells(item, index)}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;