import React from 'react';
import styled from 'styled-components';

import slugify from 'slugify';
import Table from './Table';
import {
  Title,
  Item,
  Description,
  Line,
  Small,
} from '../styles/DisciplineParts';
import { useScroll } from '../hooks/use_scroll';
import { LinkIcon } from '../styles/Icon';

const Et = styled.span`
  :not(:first-of-type) {
    ::before {
      content: ', ';
    }
  }
`;
const Ou = styled.span`
  :not(:first-child) {
    ::before {
      content: ' ou ';
    }
  }
`;

const RequirementsDiv = styled.div`
  padding-left: 0.5rem;
  display: inline;
  font-size: 1.1rem;
`;

const Requirements = ({ requirements }) => (
  <RequirementsDiv>
    (
    {requirements
      .sort((a, b) => b.or[0].name - a.or[0].name)
      .map(requirement => (
        <Et>
          {requirement.or.map(req => (
            <Ou>
              {req.name}: {req.level}
            </Ou>
          ))}
        </Et>
      ))}
    )
  </RequirementsDiv>
);

const ComboPower = ({ power }) => {
  const hash = `combo-power-${slugify(power.name.toLowerCase())}`;
  const scrollRef = useScroll(hash);
  return (
    <Item key={power.name}>
      <Title ref={scrollRef} name={hash}>
        {power.name}
        <Requirements requirements={power.requirements} />
        <a href={`#${hash}`} className="link">
          <LinkIcon icon="link" />
        </a>
      </Title>
      <Description>
        {power.description.map(line => (
          <Line>{line}</Line>
        ))}
      </Description>
      <Small>{power.source}</Small>
      <Table data={power.extra_table} />
    </Item>
  );
};

export default ComboPower;
