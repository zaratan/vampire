import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DisciplinePower from './DisciplinePower';
import { Icon, LinkIcon } from '../styles/Icon';

const NoteLevel = styled.li`
  margin-bottom: 2rem;
`;

const LevelItem = styled.li`
  margin-bottom: 3rem;
`;

const LevelHeader = styled.h2`
  margin-bottom: 2rem;

  @media (hover: hover) {
    .link {
      transition: display 0.3s ease-in-out;
      display: none;
    }

    :hover .link {
      display: inline;
    }
  }
`;

const Powers = styled.ul`
  display: ${props => (props.show ? 'inherit' : 'none')};
`;

const DisciplineLevel = ({ level }) => {
  const powers = level.powers.sort((a, b) => (a.title < b.title ? -1 : 1));
  const [open, setOpen] = useState(true);
  const toggleFold = () => {
    setOpen(!open);
  };

  const header = useRef(null);
  useEffect(() => {
    if (window.location.hash === `#level-${level.level}`) {
      header.current.scrollIntoView();
    } else if (
      window.location.hash &&
      !window.location.hash.startsWith(`#level-${level.level}`)
    ) {
      setOpen(false);
    }
  }, [level.level]);

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
      <LevelHeader id={`level-${level.level}`} ref={header}>
        <Icon
          icon={`caret-${open ? 'down' : 'right'}`}
          onClick={toggleFold}
          onKeyPress={toggleFold}
          role="button"
          tabIndex="0"
          title="fold "
        />
        Niveau {level.level}
        <a href={`#level-${level.level}`} className="link">
          <LinkIcon icon="link" />
        </a>
      </LevelHeader>
      <Powers show={open}>
        {powers.map(power => (
          <DisciplinePower power={power} level={level.level} />
        ))}
      </Powers>
    </LevelItem>
  );
};

export default DisciplineLevel;
