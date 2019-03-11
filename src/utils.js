const slugify = require('slugify');

export const toDisciplineNames = arr =>
  Array.from(new Set(arr.map(disc => disc.name)));

export const displineToPath = name => `/${slugify(name.toLowerCase())}`;
export const thaumaturgyToPath = name =>
  `/thaumaturgy/${slugify(name.toLowerCase())}`;

export const thaumaturgyPathToPath = (thaumaturgy, path) =>
  `/thaumaturgy/${slugify(thaumaturgy.toLowerCase())}/${slugify(
    path.toLowerCase()
  )}`;
