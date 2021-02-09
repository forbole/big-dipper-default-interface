import {
  USER_STAKING,
  LATEST_BLOCK_HEIGHT,
} from '@graphql/queries';
import { gql } from '@apollo/client';

export const USER_STAKING_MOCK_DATA = [
  {
    request: {
      query: gql`${USER_STAKING}`,
      variables: {
        address: null,
        height: null,
        utc: null,
      },
    },
    result: {
      data: {
        account: [
          {
            delegations: [
              {
                delegator_address: 'desmos1qpm8wutycha3ncd0u3w9g42v89xnnfs6f9sg8d',
                amount: {
                  denom: 'udaric',
                  amount: 139363933,
                },
              },
              {
                delegator_address: 'desmos1qpm8wutycha3ncd0u3w9g42v89xndiwj284ufk',
                amount: {
                  denom: 'udaric',
                  amount: 1004503453,
                },
              },
            ],
            redelegations: [],
            unbonding_delegations: [],
          },
        ],
        total_voting_power: [
          {
            aggregate: {
              sum: {
                voting_power: 204592000,
              },
            },
          },
        ],
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
