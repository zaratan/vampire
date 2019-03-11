import React from 'react';
import styled from 'styled-components';

const Title = styled.header`
  font-weight: 700;
`;

const Description = styled.div`
  font-size: 1.6rem;
`;

const Item = styled.li`
  margin-bottom: 1rem;
`;

const DisciplinePower = ({ power }) => (
  <Item>
    <Title>{power.title}</Title>
    <Description>
      {power.description.map(line => (
        <p>{line}</p>
      ))}
    </Description>
    <small>{power.source}</small>
    {power.extra_table && (
      <div>
        {power.extra_table.map(line => (
          <div>
            {line.map(cell => (
              <span>{cell}</span>
            ))}
          </div>
        ))}
      </div>
    )}
    {power.extra_table_two && (
      <div>
        {power.extra_table.map(line => (
          <div>
            {line.map(cell => (
              <span>{cell}</span>
            ))}
          </div>
        ))}
      </div>
    )}
  </Item>
);

export default DisciplinePower;
