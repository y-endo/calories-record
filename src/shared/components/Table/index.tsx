import * as React from 'react';
import styled from 'styled-components';

type Props = {
  header?: string[];
  rows: string[][];
};

const Table: React.FC<Props> = ({ header, rows }) => {
  let tableHead = null;
  if (header) {
    tableHead = (
      <thead>
        <TableRow>
          {header.map((data, index) => (
            <TableCell as={'th'} key={`header-data-${index}`}>
              {data}
            </TableCell>
          ))}
        </TableRow>
      </thead>
    );
  }

  return (
    <StyledTable>
      {tableHead}
      <tbody>
        {rows.map((row, index) => (
          <TableRow key={`row-${index}`}>
            {row.map((data, index) => (
              <TableCell key={`row-data-${index}`}>{data}</TableCell>
            ))}
          </TableRow>
        ))}
      </tbody>
    </StyledTable>
  );
};

const StyledTable = styled.table`
  width: 100%;
`;

const TableRow = styled.tr`
  thead & {
    background-color: ${props => props.theme.palette.primary.main};
    color: #fff;
  }
  tbody & {
    border-bottom: 1px solid #eee;
  }
`;

const TableCell = styled.td`
  padding: 12px;
`;

export default Table;
