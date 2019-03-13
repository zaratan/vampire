import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DisciplinePower from './DisciplinePower';
import { Icon, LinkIcon } from '../styles/Icon';
import { useScroll } from '../hooks/use_scroll';

const NoteLevel = styled.li`
  margin-bottom: 2rem;
`;

const LevelItem = styled.li`
  margin-bottom: 3rem;
`;

const LevelHeader = styled.h2`
  margin-bottom: 2rem;

  @media (pointer: fine) and (hover: hover) {
    .link {
      transition: display 0.3s ease-in-out;
      display: none;
    }

    :hover .link {
      display: inline;
    }
  }
`;

const LevelName = styled.span`
  cursor: pointer;

  :focus {
    outline: none;
    box-shadow: none;
  }

  :focus svg {
    color: ${props => props.theme.highlight2};
  }

  :hover svg {
    color: ${props => props.theme.highlight2};
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

  const hash = `level-${level.level}`;
  const header = useScroll(hash);

  useEffect(() => {
    if (window.location.hash && !window.location.hash.startsWith(`#${hash}`)) {
      setOpen(false);
    }
  }, [hash]);

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
    <LevelItem key={hash}>
      <LevelHeader id={hash} ref={header}>
        <LevelName
          onClick={toggleFold}
          tabIndex="0"
          onKeyPress={toggleFold}
          role="button"
          title={`Fold level ${level.level}`}
        >
          <Icon icon={`caret-${open ? 'down' : 'right'}`} />
          Niveau {level.level}
        </LevelName>
        <a href={`#${hash}`} className="link">
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
