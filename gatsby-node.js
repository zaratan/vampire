// You can delete this file if you're not using it

const slugify = require('slugify');
const path = require('path');

// PATCH FOR NOW
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

const toDisciplineNames = arr =>
  Array.from(new Set(arr.map(disc => disc.fieldValue)));

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return Promise.all([
    new Promise(resolve => {
      graphql(`
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
    new Promise(resolve => {
      graphql(`
        {
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
      `)
        .then(result => {
          const comboRequirements = Array.from(
            new Set(
              result.data.allDisciplinesComboJson.edges
                .map(e => e.node)
                .map(e => e.requirements)
                .flat()
                .map(e => e.or)
                .flat()
                .map(e => e.name)
            )
          );
          comboRequirements.forEach(async comboDiscipline => {
            const slug = slugify(comboDiscipline.toLowerCase());
            await createPage({
              path: `combo/${slug}`,
              component: path.resolve(`./src/templates/ComboDisciplines.jsx`),
              context: {
                discipline: comboDiscipline,
              },
            });
          });
        })
        .catch(e => console.log(e));
      resolve();
    }),
    new Promise(resolve => {
      graphql(`
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
            const slug = `thaumaturgy/${slugify(discipline.toLowerCase())}`;
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
    new Promise(resolve => {
      graphql(`
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
          thaumaturgies.forEach(async thaumaturgy => {
            const thauSlug = slugify(thaumaturgy[0].toLowerCase());
            const pathSlug = slugify(thaumaturgy[1].toLowerCase());
            await createPage({
              path: `thaumaturgy/${thauSlug}/${pathSlug}`,
              component: path.resolve(`./src/templates/ThaumaturgiePath.jsx`),
              context: {
                discipline: thaumaturgy[0],
                thaumaturgyPath: thaumaturgy[1],
              },
            });
          });
        })
        .catch(e => console.log(e));
      resolve();
    }),
  ]);
};
