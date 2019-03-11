import React from 'react';
import styled from 'styled-components';
import Table from './Table';

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
    <Table data={power.extra_table} />
    <Table data={power.extra_table_two} />
  </Item>
);

export default DisciplinePower;
