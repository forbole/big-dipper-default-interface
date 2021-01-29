import { VALIDATOR_LATEST_BLOCKS } from '@graphql/queries';
import { gql } from '@apollo/client';

export const VALIDATOR_LATEST_BLOCKS_MOCK_DATA = [
  {
    request: {
      query: gql`${VALIDATOR_LATEST_BLOCKS}`,
      variables: {
        address: null,
      },
    },
    result: {
      data: {
        block: [
          {
            height: 103385,
            proposer_address: 'desmosvalcons139tletzvu3p7ssvf40nrsr5j6p5nrka48atrdh',
            validator_voting_powers_aggregate: {
              aggregate: {
                sum: {
                  voting_power: 143611,
                },
              },
            },
            pre_commits_aggregate: {
              aggregate: {
                sum: {
                  voting_power: null,
                },
                count: 0,
              },
            },
            transactions_aggregate: {
              aggregate: {
                sum: {
                  gas_used: null,
                  gas_wanted: null,
                },
                count: 0,
              },
            },
            pre_commits: [],
          },
          {
            height: 103384,
            proposer_address: 'desmosvalcons1n6x4y8srfml6f4xsynyn9y0dtjrfwfhyjpapkf',
            validator_voting_powers_aggregate: {
              aggregate: {
                sum: {
                  voting_power: 143611,
                },
              },
            },
            pre_commits_aggregate: {
              aggregate: {
                sum: {
                  voting_power: 143611,
                },
                count: 60,
              },
            },
            transactions_aggregate: {
              aggregate: {
                sum: {
                  gas_used: null,
                  gas_wanted: null,
                },
                count: 0,
              },
            },
            pre_commits: [
              {
                height: 103384,
                validator_address: 'desmosvalcons1qm3rjdresjcmw7de4tp556pvhq370yvxj0zj7q',
              },
            ],
          },
        ],
      },
    },
  },
];
