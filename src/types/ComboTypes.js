// @flow

export type RequirementType = {
  or: [{ name: string, level: number, subname: string }],
};

export type RequirementsType = [RequirementType];

export type ExtraRequirementsType = [string];

export type ComboPowerType = {
  name: string,
  requirements: RequirementsType,
  extra_requirements: ExtraRequirementsType,
  description: [string],
  source: string,
  extra_table: string[][],
};
