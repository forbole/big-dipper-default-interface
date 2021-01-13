import { COMMUNITY_POOL } from '@graphql/queries';
import { gql } from '@apollo/client';

export const HEADER_BAR_MOCK = [
  {
    request: {
      query: gql`${COMMUNITY_POOL}`,
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
