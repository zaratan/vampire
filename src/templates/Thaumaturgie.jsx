import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { thaumaturgyPathToPath } from '../utils';
import DisciplinePower from '../components/DisciplinePower';
import Disciplines from '../styles/Disciplines';
import DisciplineLevel from '../components/DisciplineLevel';

const Thaumaturgie = ({ pageContext, data }) => {
  const { discipline } = pageContext;
  const paths = Array.from(
    new Set(data.allDisciplinesJson.edges.map(node => node.node.subname))
  )
    .filter(e => e !== '')
    .sort();
  const powers = data.allDisciplinesJson.edges
    .map(node => node.node)
    .filter(e => e.level === 0 && e.subname === '');

  return (
    <Layout>
      <SEO title={discipline} />
      <h1>{discipline}</h1>
      <ul>
        <DisciplineLevel level={{ level: '0', powers }} />
      </ul>
      <Disciplines>
        {paths.map(path => (
          <li key={path}>
            <Link to={thaumaturgyPathToPath(discipline, path)}>{path}</Link>
          </li>
        ))}
      </Disciplines>
    </Layout>
  );
};

export default Thaumaturgie;

export const query = graphql`
  query($discipline: String!) {
    allDisciplinesJson(filter: { name: { eq: $discipline } }) {
      edges {
        node {
          subname
          title
          description
          level
          source
          extra_table
          extra_table_two
        }
      }
    }
  }
`;
