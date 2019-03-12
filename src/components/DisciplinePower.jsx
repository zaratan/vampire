import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import slugify from 'slugify';

import Table from './Table';
import { LinkIcon } from '../styles/Icon';

const Title = styled.h3`
  margin-bottom: 0.5rem;

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

const Description = styled.div`
  font-size: 0.9rem;
`;

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

const DisciplinePower = ({ power, level }) => {
  const linkHash = `level-${level}-power-${slugify(power.title.toLowerCase())}`;

  const header = useRef(null);
  useEffect(() => {
    console.log({ linkHash, hash: window.location.hash });
    if (window.location.hash === `#${linkHash}`) {
      header.current.scrollIntoView();
    }
  }, [linkHash]);

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
