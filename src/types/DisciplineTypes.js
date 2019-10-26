// @flow

export type PowerType = {
  title: string,
  description: [string],
  source: string,
  extra_table?: string[][],
  extra_table_two?: string[][],
  name: string,
  subname: string,
  level: number,
};

export type LevelType = {
  powers: PowerType[],
  level: number | string,
};

export type DisciplineType = PowerType;
