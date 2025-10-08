import React from 'react';
import DataTable from '../common/DataTable';
import TerminalWindow from '../layout/TerminalWindow';
import StatusFilter from '../common/StatusFilter';

const statusOptions = [
  { value: 'alle', label: 'Alle', shortcut: '0' },
  { value: 'entwurf', label: 'Entwurf', shortcut: '1' },
  { value: 'fertig', label: 'Fertig', shortcut: '2' },
  { value: 'gesendet', label: 'Gesendet', shortcut: '3' },
  { value: 'bezahlt', label: 'Bezahlt', shortcut: '4' }
];

const RechnungenScreen = ({ 
  rechnungen = [],
  allRechnungen = [],
  selectedIndex = 0, 
  onRowClick,
  onDoubleClick,
  statusFilter,
  onStatusFilterChange
}) => {
  
  return (
    <TerminalWindow title="Rechnungsverwaltung">
      <StatusFilter 
        activeFilter={statusFilter}
        onFilterChange={onStatusFilterChange}
        allOfferten={allRechnungen}
        statusOptions={statusOptions}
      />
      <DataTable
        data={rechnungen}
        selectedIndex={selectedIndex}
        onRowClick={onRowClick}
        onDoubleClick={onDoubleClick}
        emptyMessage={`Keine Rechnungen mit Status "${statusFilter}" vorhanden - F4 für neue Rechnung`}
        type="invoices"
      />
    </TerminalWindow>
  );
};

export default RechnungenScreen;
