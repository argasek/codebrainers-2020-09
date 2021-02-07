import React from 'react'
import classNames from 'classnames';

const PlantsTableHeaderCell = ({ children, sortKey, sortBy, onSort }) => {
  const className = classNames({ 'sortable': sortBy, 'active': sortKey && sortBy === sortKey});
  return (
    <th onClick={() => onSort(sortBy)} className={className}>
      {children}
    </th>
  );
}

export default PlantsTableHeaderCell