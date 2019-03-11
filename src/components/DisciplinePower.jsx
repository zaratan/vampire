import React from 'react';
import styled from 'styled-components';
import Table from './Table';

const Title = styled.header`
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const Description = styled.div`
  font-size: 1.6rem;
`;

const Item = styled.li`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
`;

const Small = styled.small`
  margin-top: 0.5rem;
  align-self: flex-end;
  max-width: 50%;
  font-size: 1.1rem;
`;

const Line = styled.p`
  margin-bottom: 0.3rem;
`;

const DisciplinePower = ({ power }) => (
  <Item>
    <Title>{power.title}</Title>
    <Description>
      {power.description.map(line => (
        <Line>{line}</Line>
      ))}
    </Description>
    <Small>{power.source}</Small>
    <Table data={power.extra_table} />
    <Table data={power.extra_table_two} />
  </Item>
);

export default DisciplinePower;
