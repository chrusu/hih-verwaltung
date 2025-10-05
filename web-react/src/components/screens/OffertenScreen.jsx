import React from 'react';
import DataTable from '../common/DataTable';
import TerminalWindow from '../layout/TerminalWindow';

const OffertenScreen = ({ 
  offerten = [], 
  selectedIndex = 0, 
  onRowClick,
  onDoubleClick,
  onNewOffer,
  onEditOffer,
  onDeleteOffer 
}) => {
  
  return (
    <TerminalWindow title="Offertenverwaltung">
      <DataTable
        data={offerten}
        selectedIndex={selectedIndex}
        onRowClick={onRowClick}
        onDoubleClick={onDoubleClick}
        emptyMessage="Keine Offerten vorhanden - F3 für neue Offerte"
        type="offers"
      />
    </TerminalWindow>
  );
};

export default OffertenScreen;