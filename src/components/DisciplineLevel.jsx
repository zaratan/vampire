import React from 'react';
import styled from 'styled-components';

import DisciplinePower from './DisciplinePower';

const NoteLevel = styled.li`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const LevelItem = styled.li`
  margin-bottom: 3rem;
`;

const DisciplineLevel = ({ level }) => {
  const powers = level.powers.sort((a, b) => (a.title < b.title ? -1 : 1));
  if (level.level === '0') {
    return (
      <NoteLevel>
        <ul>
          {powers.map(power => (
            <DisciplinePower power={power} level={level.level} />
          ))}
        </ul>
      </NoteLevel>
    );
  }

  return (
    <LevelItem>
      <header>LEVEL: {level.level}</header>
      <ul>
        {powers.map(power => (
          <DisciplinePower power={power} level={level.level} />
        ))}
      </ul>
    </LevelItem>
  );
};

export default DisciplineLevel;
