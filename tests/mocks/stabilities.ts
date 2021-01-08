import { STABILITIES } from '@graphql/queries';

export const STABILITIES_MOCK_DATA = [
  {
    request: {
      query: STABILITIES,
      variables: {
      },
    },
    result: {
      data: {
        pool: [
          {
            bonded_tokens: 10021785136,
            not_bonded_tokens: 1248539044,
          },
        ],
        total_tokens: [
          {
            coins: [
              {
                denom: 'udaric',
                amount: 7997178939900,
              },
              {
                denom: 'upotin',
                amount: 80000000000000,
              },
            ],
          },
        ],
        community_pool: [
          {
            coins: [
              {
                denom: 'udaric',
                amount: 2060041159.8717923,
              },
              {
                denom: 'upotin',
                amount: 251.53814500134035,
              },
            ],
          },
        ],
        inflation: [],
      },
    },
  },
];
