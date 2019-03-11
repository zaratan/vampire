/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const slugify = require('slugify');
const path = require('path');

const toDisciplineNames = arr =>
  Array.from(new Set(arr.map(disc => disc.fieldValue)));

Object.defineProperty(Array.prototype, 'flat', {
  value(depth = 1) {
    return this.reduce(function(flat, toFlatten) {
      return flat.concat(
        Array.isArray(toFlatten) && depth - 1
          ? toFlatten.flat(depth - 1)
          : toFlatten
      );
    }, []);
  },
});

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return Promise.all([
    new Promise(async resolve => {
      await graphql(`
        {
          allDisciplinesJson(
            filter: { subname: { eq: "" }, level: { ne: 0 } }
          ) {
            group(field: name) {
              fieldValue
            }
          }
        }
      `)
        .then(result => {
          const disciplines = toDisciplineNames(
            result.data.allDisciplinesJson.group
          );
          disciplines.forEach(async discipline => {
            const slug = slugify(discipline.toLowerCase());
            await createPage({
              path: slug,
              component: path.resolve(`./src/templates/Discipline.jsx`),
              context: {
                discipline,
              },
            });
          });
        })
        .catch(e => console.log(e));
      resolve();
    }),
    new Promise(async resolve => {
      await graphql(`
        {
          allDisciplinesJson(filter: { subname: { ne: "" } }) {
            group(field: name) {
              fieldValue
            }
          }
        }
      `)
        .then(result => {
          const disciplines = toDisciplineNames(
            result.data.allDisciplinesJson.group
          );
          disciplines.forEach(async discipline => {
            const slug = slugify(discipline.toLowerCase());
            await createPage({
              path: slug,
              component: path.resolve(`./src/templates/Thaumaturgie.jsx`),
              context: {
                discipline,
              },
            });
          });
        })
        .catch(e => console.log(e));
      resolve();
    }),
    new Promise(async resolve => {
      await graphql(`
        {
          allDisciplinesJson(filter: { subname: { ne: "" } }) {
            group(field: name) {
              fieldValue
              edges {
                node {
                  subname
                }
              }
            }
          }
        }
      `)
        .then(result => {
          console.log(result.group);
          const thaumaturgies = Array.from(
            new Set(
              result.data.allDisciplinesJson.group
                .map(discipline =>
                  discipline.edges.map(node => [
                    discipline.fieldValue,
                    node.node.subname,
                  ])
                )
                .flat()
            )
          );
          const flu = result.data.allDisciplinesJson.group.map(discipline =>
            discipline.edges.map(node => [
              discipline.fieldValue,
              node.node.subname,
            ])
          );
          console.log({ flu: [1, 2, [3, 4, [5, 6]]].flat() });
          thaumaturgies.forEach(async thaumaturgy => {
            console.log(thaumaturgy);
            const thauSlug = slugify(thaumaturgy[0].toLowerCase());
            const pathSlug = slugify(thaumaturgy[1].toLowerCase());
            await createPage({
              path: `${thauSlug}/${pathSlug}`,
              component: path.resolve(`./src/templates/ThaumaturgiePath.jsx`),
              context: {
                thaumaturgy,
              },
            });
          });
        })
        .catch(e => console.log(e));
      resolve();
    }),
  ]);
};
