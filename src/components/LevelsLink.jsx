import React from 'react';
import styled from 'styled-components';

const LevelContainer = styled.p`
  display: flex;
  justify-content: center;
`;

const LevelLink = styled.a`
  margin: 0 0.5rem;
  padding: 0 0.5rem;
`;

const LevelsLink = ({ data }) =>
  data.length !== 1 || data[0].level !== '0' ? (
    <LevelContainer>
      Go to level:{' '}
      {data.map(({ level }) => {
        if (level === '0') return;
        return (
          <LevelLink href={`#level-${level}`}>
            <span>{level}</span>
          </LevelLink>
        );
      })}
    </LevelContainer>
  ) : null;

export default LevelsLink;
