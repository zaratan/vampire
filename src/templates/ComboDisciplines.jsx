import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import SectionHeader from '../styles/SectionHeader';
import ComboPower from '../components/ComboPower';

const ComboDisciplines = ({ pageContext, data }) => {
  const { discipline } = pageContext;

  const disciplinesData = data.allDisciplinesComboJson.edges
    .map(node => node.node)
    .sort((a, b) => {
      const aReq = a.requirements
        .filter(
          req => req.or.filter(disc => disc.name === discipline).length >= 1
        )[0]
        .or.find(disc => disc.name === discipline);
      const bReq = b.requirements
        .filter(
          req => req.or.filter(disc => disc.name === discipline).length >= 1
        )[0]
        .or.find(disc => disc.name === discipline);
      return aReq.level - bReq.level;
    });
  return (
    <Layout>
      <SEO title={`Disciplines Combinées avec ${discipline}`} />
      <SectionHeader>Disciplines Combinées avec {discipline}</SectionHeader>
      <ul>
        {disciplinesData.map(disc => (
          <ComboPower power={disc} />
        ))}
      </ul>
    </Layout>
  );
};

export default ComboDisciplines;

export const query = graphql`
  query($discipline: String!) {
    allDisciplinesComboJson(
      filter: {
        requirements: {
          elemMatch: { or: { elemMatch: { name: { eq: $discipline } } } }
        }
      }
    ) {
      edges {
        node {
          requirements {
            or {
              name
              subname
              level
            }
          }
          extra_requirements
          name
          source
          description
          extra_table
        }
      }
    }
  }
`;
