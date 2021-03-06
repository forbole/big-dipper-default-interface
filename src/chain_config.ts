export const chainConfig = {
  // network: 'morpheus-13001',
  icon: 'https://gist.githubusercontent.com/kwunyeung/8be4598c77c61e497dfc7220a678b3ee/raw/desmos.svg?sanitize=true',
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
