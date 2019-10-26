// @flow

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
import type {
  RequirementsType,
  ExtraRequirementsType,
  ComboPowerType,
} from '../types/ComboTypes';

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

const Extra = styled.span`
  ::before {
    content: ' et ';
  }
`;

const RequirementsDiv = styled.div`
  padding-left: 0.5rem;
  display: inline;
  font-size: 1.1rem;
`;

const ExtraRequirements = ({
  requirements,
  extraRequirements,
}: {
  requirements: RequirementsType,
  extraRequirements: ExtraRequirementsType,
}) => {
  if (requirements.length === 0) {
    return (
      <span>
        {extraRequirements.map(extraReq => (
          <span>{extraReq}</span>
        ))}
      </span>
    );
  }
  return (
    <Extra>
      {extraRequirements.map(extraReq => (
        <span>{extraReq}</span>
      ))}
    </Extra>
  );
};
const Requirements = ({
  requirements,
  extraRequirements,
}: {
  requirements: RequirementsType,
  extraRequirements: ExtraRequirementsType,
}) => (
  <RequirementsDiv>
    <span>
      {requirements
        .slice()
        .sort((a, b) => b.or[0].level - a.or[0].level)
        .map(requirement => (
          <Et>
            {requirement.or.map(req => (
              <Ou>
                {req.name}
                {req.subname && ` (${req.subname})`}: {req.level}
              </Ou>
            ))}
          </Et>
        ))}
    </span>
    {extraRequirements && (
      <ExtraRequirements
        requirements={requirements}
        extraRequirements={extraRequirements}
      />
    )}
  </RequirementsDiv>
);

const ComboPower = ({ power }: { power: ComboPowerType }) => {
  const hash = `combo-power-${slugify(power.name.toLowerCase())}`;
  const scrollRef = useScroll(hash);
  return (
    <Item key={power.name}>
      <Title ref={scrollRef} name={hash}>
        {power.name}
        <Requirements
          requirements={power.requirements}
          extraRequirements={power.extra_requirements}
        />
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
