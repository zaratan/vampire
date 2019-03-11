export const toDisciplineNames = arr =>
  Array.from(new Set(arr.map(disc => disc.name)));
