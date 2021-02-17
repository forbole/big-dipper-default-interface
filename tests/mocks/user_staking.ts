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
        height: 204592,
        utc: '2018–01–30T12:12:12',
        address: null,
      },
    },
    result: {
      data: {
        total_voting_power: {
          aggregate: {
            sum: {
              voting_power: 204592000,
            },
          },
        },
        delegation_reward: [
          {
            delegator_address: 'desmos1qpm8wutycha3ncd0u3w9g42v89xnnfs6f9sg8d',
            validator_address: 'desmosvalcons1ympu6mhnusc2l8egneyg4lvahwk064hafpy2jm',
            amount: [],
          },
        ],
        account: [
          {
            delegations: [
              {
                amount: {
                  denom: 'udaric',
                  amount: '139363933',
                },
                validator_address: 'desmos1qpm8wutycha3ncd0u3w9g42v89xnnfs6f9sg8d',
                validator: {
                  validator_voting_powers: [],
                  validator_commissions: [
                    {
                      commission: 0.1,
                    },
                  ],
                },
              },
            ],
            redelegations: [],
            unbondings: [],
          },
        ],
      },
    },
  },
  {
    request: {
      query: gql`${LATEST_BLOCK_HEIGHT}`,
      variables: {
      },
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
