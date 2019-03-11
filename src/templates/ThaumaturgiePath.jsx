import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import DisciplineLevel from '../components/DisciplineLevel';
import SectionHeader from '../styles/SectionHeader';

const Discipline = ({ pageContext, data }) => {
  const { discipline, thaumaturgyPath } = pageContext;

  const disciplineData = data.allDisciplinesJson.group
    .map(group => ({
      level: group.fieldValue,
      powers: group.edges.map(e => e.node),
    }))
    .sort((a, b) => a.level - b.level);

  return (
    <Layout>
      <SEO title={`${discipline} - ${thaumaturgyPath}`} />
      <SectionHeader>
        {discipline} - {thaumaturgyPath}
      </SectionHeader>
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
  query($discipline: String!, $thaumaturgyPath: String!) {
    allDisciplinesJson(
      filter: { name: { eq: $discipline }, subname: { eq: $thaumaturgyPath } }
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
