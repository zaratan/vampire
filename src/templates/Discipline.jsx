import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

const DisciplinePower = ({ power }) => (
  <li>
    <header>{power.title}</header>
    <p>{power.description}</p>
    <span>{power.source}</span>
  </li>
);

const DisciplineLevel = ({ level }) => (
  <li>
    <header>LEVEL: {level.level}</header>
    <ul>
      {level.powers.map(power => (
        <DisciplinePower power={power} />
      ))}
    </ul>
  </li>
);

const Discipline = ({ pageContext, data }) => {
  const { discipline } = pageContext;
  const disciplineData = data.allDisciplinesJson.group
    .map(group => ({
      level: group.fieldValue,
      powers: group.edges.map(e => e.node),
    }))
    .sort((a, b) => a.level - b.level);

  return (
    <>
      <h1>{discipline}</h1>
      <ul>
        {disciplineData.map(level => (
          <DisciplineLevel level={level} />
        ))}
      </ul>
    </>
  );
};

export default Discipline;

export const query = graphql`
  query($discipline: String!) {
    allDisciplinesJson(
      filter: { name: { eq: $discipline }, subname: { eq: "" } }
    ) {
      group(field: level) {
        fieldValue
        edges {
          node {
            title
            description
            source
          }
        }
      }
    }
  }
`;
