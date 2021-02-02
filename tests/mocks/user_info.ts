import {
  USERINFO, USERINFO_LATEST_HEIGHT,
} from '@graphql/queries';
import { gql } from '@apollo/client';

export const USERINFO_MOCK_DATA = [
  {
    request: {
      query: gql`${USERINFO}`,
      variables: {
        // address: 'desmos1qpm8wutycha3ncd0u3w9g42v89xnnfs6f9sg8d',
        address: null,
        // height: 1,
      },
    },
    result: {
      data: {
        token_price: [],
        account: [
          {
            address: 'desmos1qpm8wutycha3ncd0u3w9g42v89xnnfs6f9sg8d',
            available: [
              {
                coins: [
                  {
                    denom: 'udaric',
                    amount: 9000155,
                  },
                ],
              },
            ],
            delegated: [
              {
                amount: {
                  denom: 'udaric',
                  amount: 9000155,
                },
              },
            ],
            redelegations: [
              {
                amount: {
                  denom: 'udaric',
                  amount: 9000155,
                },
              },
            ],
            unbonding: [
              {
                amount: {
                  denom: 'udaric',
                  amount: 9000155,
                },
              },
            ],
            rewards: [
              {
                amount: {
                  denom: 'udaric',
                  amount: 9000155,
                },
              },
            ],
            validator: [],
          },
        ],
      },
    },
  },
  {
    request: {
      query: gql`${USERINFO_LATEST_HEIGHT}`,
      variables: {
        // address: 'desmos1qpm8wutycha3ncd0u3w9g42v89xnnfs6f9sg8d',
        address: null,
      },
    },
    result: {
      data: {
        account: [
          {
            delegations: [
              {
                height: 1,
              },
            ],
            redelegations: [],
            unbonding_delegations: [],
          },
        ],
      },
    },
  },
];
