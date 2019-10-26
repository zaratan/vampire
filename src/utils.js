// @flow

import type { DisciplineType } from './types/DisciplineTypes';

const slugify = require('slugify');

export const toDisciplineNames = (arr: [DisciplineType]) => [
  ...new Set<string>(arr.map(disc => disc.name)),
];

export const displineToPath = (name: string) =>
  `/${slugify(name.toLowerCase())}`;
export const thaumaturgyToPath = (name: string) =>
  `/thaumaturgy/${slugify(name.toLowerCase())}`;

export const thaumaturgyPathToPath = (thaumaturgy: string, path: string) =>
  `/thaumaturgy/${slugify(thaumaturgy.toLowerCase())}/${slugify(
    path.toLowerCase()
  )}`;

export const comboWithPath = (comboDiscipline: string) =>
  `combo/${slugify(comboDiscipline.toLowerCase())}`;
