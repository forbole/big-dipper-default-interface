import { COMMUNITY_POOL } from '@graphql/queries';

export const HEADER_BAR_MOCK = [
  {
    request: {
      query: COMMUNITY_POOL,
      variables: {
      },
    },
    result: {
      data: {
        community_pool: [
          {
            coins: [
              {
                amount: 300000,
                denom: 'udaric',
              },
            ],
          },
        ],
      },
    },
  },
];
