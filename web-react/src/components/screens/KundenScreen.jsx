import React from 'react';
import DataTable from '../common/DataTable';
import TerminalWindow from '../layout/TerminalWindow';

const KundenScreen = ({ 
  kunden = [], 
  selectedIndex = 0, 
  onRowClick,
  onDoubleClick,
  onNewCustomer,
  onEditCustomer,
  onDeleteCustomer 
}) => {
  
  return (
    <TerminalWindow title="Kundenverwaltung">
      <DataTable
        data={kunden}
        selectedIndex={selectedIndex}
        onRowClick={onRowClick}
        onDoubleClick={onDoubleClick}
        emptyMessage="Keine Kunden vorhanden - F3 für neuen Kunden"
        type="customers"
      />
    </TerminalWindow>
  );
};

export default KundenScreen;