import React from 'react';
import styled from 'styled-components';

const TableStyle = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 1rem;
  margin: 2rem;
  font-size: 0.75rem;

  @media (max-width: 700px) {
    margin: 2rem 0;
  }
`;

const Line = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);

  :last-child {
    border: 0;
  }
`;

const Cell = styled.span`
  width: ${props => `${100 / props.number}%`};
  padding: 0 0.2rem;
`;

const Table = ({ data }) =>
  data ? (
    <TableStyle>
      {data.map(line => (
        <Line>
          {line.map(cell => (
            <Cell number={line.length}>{cell}</Cell>
          ))}
        </Line>
      ))}
    </TableStyle>
  ) : null;

export default Table;
