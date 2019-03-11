import React from 'react';

import DisciplinePower from './DisciplinePower';

const DisciplineLevel = ({ level }) => {
  const powers = level.powers.sort((a, b) => (a.title < b.title ? -1 : 1));
  console.log(powers);
  return (
    <li>
      <header>LEVEL: {level.level}</header>
      <ul>
        {powers.map(power => (
          <DisciplinePower power={power} />
        ))}
      </ul>
    </li>
  );
};

export default DisciplineLevel;
