import { VALIDATOR_INFO } from '@graphql/queries';
import { gql } from '@apollo/client';

export const VALIDATOR_INFO_MOCK_DATA = [
  {
    request: {
      query: gql`${VALIDATOR_INFO}`,
      variables: {
        address: null,
      },
    },
    result: {
      data: {
        validator: [
          {
            validator_info: {
              operator_address: 'desmosvaloper1pr7q92pv395pe2tst24ejkthpfz4w5zsh0zpja',
              self_delegate_address: 'desmos1pr7q92pv395pe2tst24ejkthpfz4w5zsfz24c0',
              consensus_address: 'desmosvalcons1a9lqfxq3vwzpferq2lhu2lutspvlxplmzx5v5x',
              max_change_rate: '0.010000000000000000',
              max_rate: '0.200000000000000000',
            },
            validator_commission: {
              commission: 1,
            },
          },
        ],
      },
    },
  },
];
