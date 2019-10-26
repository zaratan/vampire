// @flow

import React from 'react';
import slugify from 'slugify';

import Table from './Table';
import { LinkIcon } from '../styles/Icon';
import {
  Title,
  Description,
  Item,
  Line,
  Small,
} from '../styles/DisciplineParts';
import { useScroll } from '../hooks/use_scroll';
import type { PowerType } from '../types/DisciplineTypes';

const DisciplinePower = ({
  power,
  level,
}: {
  power: PowerType,
  level: string,
}) => {
  const linkHash = `level-${level}-power-${slugify(power.title.toLowerCase())}`;

  const header = useScroll(linkHash);

  return (
    <Item>
      {power.title ? (
        <Title name={linkHash} ref={header}>
          {power.title}
          <a href={`#${linkHash}`} className="link">
            <LinkIcon icon="link" />
          </a>
        </Title>
      ) : null}
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
};

export default DisciplinePower;
