import {
  USER_INFO, USER_INFO_LATEST_HEIGHT,
} from '@graphql/queries';
import { gql } from '@apollo/client';

export const USERINFO_MOCK_DATA = [
  {
    request: {
      query: gql`${USER_INFO}`,
      variables: {
        // address: 'desmos1qpm8wutycha3ncd0u3w9g42v89xnnfs6f9sg8d',
        address: null,
        height: 1,
      },
    },
    result: {
      data: {
        token_price: [
          {
            price: 20,
          },
        ],
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
            validator: [
              {
                consensus_address: '',
              },
              {
                operator_address: '',
              },
              {
                self_delegate_address: '',
              },
              {
                consensus_address: '',
              },
              {
                validator: {
                  commissions: {
                    amount: 0,
                  },
                },
              },
            ],
          },
        ],
      },
    },
  },
  {
    request: {
      query: gql`${USER_INFO_LATEST_HEIGHT}`,
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
            redelegations: [
              {
                height: 1,
              },
            ],
            unbonding_delegations: [
              {
                height: 1,
              },
            ],
          },
        ],
      },
    },
  },
];
