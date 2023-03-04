import React, { useCallback } from 'react';
import '../../assets/styles.css'

export const GridTable = ({ data, headers, onRowClick }) => {
  const handleClick = useCallback(
    (event, row) => {
      event.preventDefault();
      onRowClick(row);
    },
    [onRowClick]
  );

  return (
    <div className={"grid-table"}>
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} onClick={(event) => handleClick(event, row)} className={index % 2 === 0 ? 'even' : 'odd'}>
              {headers.map((header, index) => (
                <td key={index}>{row[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};