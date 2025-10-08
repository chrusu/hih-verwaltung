import React from 'react';
import DataTable from '../common/DataTable';
import TerminalWindow from '../layout/TerminalWindow';
import StatusFilter from '../common/StatusFilter';

const OffertenScreen = ({ 
  offerten = [],
  allOfferten = [],
  selectedIndex = 0, 
  onRowClick,
  onDoubleClick,
  onNewOffer,
  onEditOffer,
  onDeleteOffer,
  statusFilter,
  onStatusFilterChange
}) => {
  
  return (
    <TerminalWindow title="Offertenverwaltung">
      <StatusFilter 
        activeFilter={statusFilter}
        onFilterChange={onStatusFilterChange}
        allOfferten={allOfferten}
      />
      <DataTable
        data={offerten}
        selectedIndex={selectedIndex}
        onRowClick={onRowClick}
        onDoubleClick={onDoubleClick}
        emptyMessage={`Keine Offerten mit Status "${statusFilter}" vorhanden - F3 für neue Offerte`}
        type="offers"
      />
    </TerminalWindow>
  );
};

export default OffertenScreen;