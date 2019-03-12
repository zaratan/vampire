import React from 'react';
import styled from 'styled-components';
import Table from './Table';

const Title = styled.h3`
  margin-bottom: 0.5rem;
`;

const Description = styled.div``;

const Item = styled.li`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
`;

const Small = styled.small`
  margin-top: 0.5rem;
  align-self: flex-end;
  max-width: 50%;
  font-size: 0.6rem;
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
