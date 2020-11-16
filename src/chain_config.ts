export const chainConfig = {
  network: 'morpheus-10000',
  base: 'udaric',
  display: 'daric',
  denomUnits: [
    {
      denom: 'udaric',
      exponent: 0,
      aliases: ['microdaric'],
    },
    {
      denom: 'mdaric',
      exponent: 3,
      aliases: ['millidaric'],
    },
    {
      denom: 'daric',
      exponent: 6,
    },
    {
      denom: 'upotic',
      exponent: 0,
      aliases: ['microdaric'],
    },
    {
      denom: 'mpotic',
      exponent: 3,
      aliases: ['millipotic'],
    },
    {
      denom: 'potic',
      exponent: 6,
    },
  ],
};
