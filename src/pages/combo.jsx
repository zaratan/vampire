import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import SectionHeader from "../styles/SectionHeader";
import ComboPower from "../components/ComboPower";

// Remove me when gatsby build can finally flatten array…
Object.defineProperty(Array.prototype, "flat", {
  value(depth = 1) {
    return this.reduce(function(flat, toFlatten) {
      return flat.concat(
        Array.isArray(toFlatten) && depth - 1
          ? toFlatten.flat(depth - 1)
          : toFlatten
      );
    }, []);
  }
});

const ComboPage = () => {
  const data = useStaticQuery(graphql`
    {
      allDisciplinesComboJson {
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
  `);
  const disciplinesData = data.allDisciplinesComboJson.edges
    .map(node => node.node)
    .sort((a, b) => {
      console.log(Array.from(a.requirements));
      const aReq = a.requirements
        .flat()
        .map(e => e.or)
        .flat()
        .map(e => e.level);
      const bReq = b.requirements
        .flat()
        .map(e => e.or)
        .flat()
        .map(e => e.level);
      return Math.max(...aReq) - Math.max(...bReq);
    });
  console.log(disciplinesData);
  return (
    <Layout>
      <SEO title="Disciplines Combinées" />
      <SectionHeader>Disciplines Combinées</SectionHeader>
      <ul>
        {disciplinesData.map(disc => (
          <ComboPower power={disc} />
        ))}
      </ul>
    </Layout>
  );
};

export default ComboPage;
