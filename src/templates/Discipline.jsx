import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import DisciplineLevel from '../components/DisciplineLevel';
import SectionHeader from '../styles/SectionHeader';

const LevelContainer = styled.p`
  display: flex;
  justify-content: center;
`;

const LevelLink = styled.a`
  margin: 0 0.5rem;
  padding: 0 0.5rem;
`;

const Discipline = ({ pageContext, data }) => {
  const { discipline } = pageContext;
  const disciplineData = data.allDisciplinesJson.group
    .map(group => ({
      level: group.fieldValue,
      powers: group.edges.map(e => e.node),
    }))
    .sort((a, b) => a.level - b.level);

  return (
    <Layout>
      <SEO title={discipline} />
      <SectionHeader>{discipline}</SectionHeader>
      <LevelContainer>
        Go to level:{' '}
        {disciplineData.map(({ level }) => (
          <LevelLink href={`#level-${level}`}>
            <span>{level}</span>
          </LevelLink>
        ))}
      </LevelContainer>
      <ul>
        {disciplineData.map(level => (
          <DisciplineLevel level={level} />
        ))}
      </ul>
    </Layout>
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
            extra_table
            extra_table_two
          }
        }
      }
    }
  }
`;
