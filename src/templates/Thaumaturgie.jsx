import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

const Thaumaturgie = ({ pageContext, data }) => {
  const { discipline } = pageContext;
  const paths = Array.from(
    new Set(data.allDisciplinesJson.edges.map(node => node.node.subname))
  ).sort();

  return (
    <>
      <h1>{discipline}</h1>
      <ul>
        {paths.map(path => (
          <li>{path}</li>
        ))}
      </ul>
    </>
  );
};

export default Thaumaturgie;

export const query = graphql`
  query($discipline: String!) {
    allDisciplinesJson(
      filter: { name: { eq: $discipline }, subname: { nin: ["", "Rituel"] } }
    ) {
      edges {
        node {
          subname
        }
      }
    }
  }
`;
