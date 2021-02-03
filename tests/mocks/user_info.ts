import {
  USER_INFO,
  LATEST_BLOCK_HEIGHT,
} from '@graphql/queries';
import { gql } from '@apollo/client';

export const USERINFO_MOCK_DATA = [
  {
    request: {
      query: gql`${USER_INFO}`,
      variables: {
        address: null,
        height: 204592,
      },
    },
    result: {
      data: {
        account: [
          {
            address: 'desmos1uj9c9929scde78wu3u5r99wcavf2fzl7rdesmh',
            available: [
              {
                coins: [
                  {
                    denom: 'udaric',
                    amount: 1000000,
                  },
                  {
                    denom: 'upotin',
                    amount: 3157,
                  },
                ],
              },
            ],
            delegations: [
              {
                amount: {
                  denom: 'udaric',
                  amount: 1000000,
                },
              },
              {
                amount: {
                  denom: 'udaric',
                  amount: 1000000,
                },
              },
            ],
            redelegations: [],
            unbonding: [],
            rewards: [],
          },
        ],
        validator: [],
        token_price: [],
      },
    },
  },
  {
    request: {
      query: gql`${LATEST_BLOCK_HEIGHT}`,
    },
    result: {
      data: {
        block: [
          {
            height: 204592,
          },
        ],
      },
    },
  },
];
