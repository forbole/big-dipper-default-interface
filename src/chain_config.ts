export const chainConfig = {
  base: 'uatom',
  display: 'atom',
  denomUnits: [
    {
      denom: 'uatom',
      exponent: 0,
      aliases: ['microatom'],
    },
    {
      denom: 'matom',
      exponent: 3,
      aliases: ['milliatom'],
    },
    {
      denom: 'atom',
      exponent: 6,
    },
  ],
};
