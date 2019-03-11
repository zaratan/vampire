import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { toDisciplineNames, displineToPath, thaumaturgyToPath } from '../utils';

const Disciplines = styled.ul`
  columns: 3;
`;

const Header = styled.h1`
  text-align: center;
  margin 2rem;
  font-size: 3rem;
`;

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
      <Header>Disciplines</Header>
      <Disciplines>
        {normalDisciplines.map(disc => (
          <li key={disc}>
            <Link to={displineToPath(disc)}>{disc}</Link>
          </li>
        ))}
      </Disciplines>
      <Header>Thaumaturgies</Header>
      <Disciplines>
        {thaumaturgies.map(disc => (
          <li key={disc}>
            <Link to={thaumaturgyToPath(disc)}>{disc}</Link>
          </li>
        ))}
      </Disciplines>
    </Layout>
  );
};

export default IndexPage;
