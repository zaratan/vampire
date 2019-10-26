// @flow

import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import DisciplineLevel from '../components/DisciplineLevel';
import SectionHeader from '../styles/SectionHeader';
import LevelsLink from '../components/LevelsLink';
import type { LevelType, PowerType } from '../types/DisciplineTypes';

const Discipline = ({
  pageContext,
  data,
}: {
  pageContext: { discipline: string, thaumaturgyPath: string },
  data: {
    allDisciplinesJson: {
      group: [
        {
          fieldValue: string,
          edges: { node: PowerType }[],
        }
      ],
    },
  },
}) => {
  const { discipline, thaumaturgyPath } = pageContext;

  const disciplineData = data.allDisciplinesJson.group
    .map(gr => ({
      level: gr.fieldValue,
      powers: gr.edges.map(e => e.node),
    }))
    .sort(
      (a: LevelType, b: LevelType) => parseInt(a.level) - parseInt(b.level)
    );

  return (
    <Layout>
      <SEO title={`${discipline} - ${thaumaturgyPath}`} />
      <SectionHeader>
        {discipline} - {thaumaturgyPath}
      </SectionHeader>
      <LevelsLink data={disciplineData} />
      <ul>
        {disciplineData.map((level: LevelType) => (
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
