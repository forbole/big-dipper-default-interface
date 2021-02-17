import {
  VALIDATOR_STAKING,
  LATEST_BLOCK_HEIGHT,
} from '@graphql/queries';
import { gql } from '@apollo/client';

export const VALIDATOR_STAKING_MOCK_DATA = [
  {
    request: {
      query: gql`${VALIDATOR_STAKING}`,
      variables: {
        address: null,
      },
    },
    result: {
      data: {
        validator: [
          {
            delegations: [
              {
                amount: {
                  denom: 'udaric',
                  amount: 139363933,
                },
                delegator_address: 'desmos152dp990japftfdvply2pspeg6dxqaj4stdv5a2',
              },
              {
                amount: {
                  denom: 'udaric',
                  amount: 5950000000,
                },
                delegator_address: 'desmos1uj9c9929scde78wu3u5r99wcavf2fzl7rdesmh',
              },
            ],
            redelegationsBySrcValidatorAddress: [],
            redelegationsByDstValidatorAddress: [],
            unbonding_delegations: [],
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
