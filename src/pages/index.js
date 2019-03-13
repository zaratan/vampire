import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import {
  toDisciplineNames,
  displineToPath,
  thaumaturgyToPath,
  comboWithPath,
} from '../utils';
import SectionHeader from '../styles/SectionHeader';
import Disciplines from '../styles/Disciplines';

const Subtitle = styled.p`
  text-align: center;
  margin-top: -2rem;
  font-size: 0.8rem;
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

      allDisciplinesComboJson {
        edges {
          node {
            requirements {
              or {
                name
              }
            }
          }
        }
      }
    }
  `);
  const disciplines = data.allDisciplinesJson.edges.map(e => e.node);
  const comboDisciplines = data.allDisciplinesComboJson.edges.map(e => e.node);
  const thaumaturgies = toDisciplineNames(
    disciplines.filter(disc => disc.subname !== '')
  ).sort();
  const normalDisciplines = toDisciplineNames(
    disciplines.filter(disc => disc.subname === '' && disc.level !== 0)
  ).sort();
  const comboRequirements = Array.from(
    new Set(
      comboDisciplines
        .map(e => e.requirements)
        .flat()
        .map(e => e.or)
        .flat()
        .map(e => e.name)
    )
  ).sort();
  console.log(comboRequirements);

  return (
    <Layout>
      <SEO title="Home" keywords={[`WOD`, `disciplines`, `jdr`]} />
      <SectionHeader>Disciplines</SectionHeader>
      <Disciplines>
        {normalDisciplines.map(disc => (
          <li key={disc}>
            <Link to={displineToPath(disc)}>{disc}</Link>
          </li>
        ))}
      </Disciplines>
      <SectionHeader>Thaumaturgies</SectionHeader>
      <Disciplines>
        {thaumaturgies.map(disc => (
          <li key={disc}>
            <Link to={thaumaturgyToPath(disc)}>{disc}</Link>
          </li>
        ))}
      </Disciplines>
      <SectionHeader>Disciplines Combinées</SectionHeader>
      <Subtitle>Avec :</Subtitle>
      <Disciplines>
        <Link to="/combo">
          <li key="all">Tous</li>
        </Link>
        {comboRequirements.map(disc => (
          <Link to={comboWithPath(disc)}>
            <li key={disc}>{disc}</li>
          </Link>
        ))}
      </Disciplines>
    </Layout>
  );
};

export default IndexPage;
