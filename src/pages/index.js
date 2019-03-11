import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { toDisciplineNames, displineToPath, thaumaturgyToPath } from '../utils';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allDisciplinesJson {
        edges {
          node {
            name
            subname
            level
          }
        }
      }
    }
  `).allDisciplinesJson.edges.map(e => e.node);
  const thaumaturgies = toDisciplineNames(
    data.filter(disc => disc.subname !== '')
  ).sort();
  const normalDisciplines = toDisciplineNames(
    data.filter(disc => disc.subname === '' && disc.level !== 0)
  ).sort();

  return (
    <Layout>
      <SEO title="Liste" keywords={[`WOD`, `discipline`, `jdr`]} />
      <h1>Disciplines</h1>
      <ul>
        {normalDisciplines.map(disc => (
          <li>
            <Link to={displineToPath(disc)}>{disc}</Link>
          </li>
        ))}
      </ul>
      <h1>Thaumaturgies</h1>
      <ul>
        {thaumaturgies.map(disc => (
          <li>
            <Link to={thaumaturgyToPath(disc)}>{disc}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default IndexPage;
