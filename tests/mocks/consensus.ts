import { CONSENSUS_POOL } from '@graphql/queries';
import {
  CONSENSUS,
  PROPOSER,
} from '@graphql/subscriptions';
import { gql } from '@apollo/client';

export const CONSENSUS_MOCK_DATA = [
  {
    request: {
      query: gql`${CONSENSUS_POOL}`,
      variables: {
      },
    },
    result: {
      data: {
        pool: [
          {
            bonded_tokens: 10021785136,
          },
        ],
      },
    },
  },
  {
    request: {
      query: gql`${CONSENSUS}`,
      variables: {
      },
    },
    result: {
      data: {
        consensus: [
          {
            height: 1400103,
            step: 'RoundStepNewHeight',
            round: 0,
          },
        ],
      },
    },
  },
  {
    request: {
      query: gql`${PROPOSER}`,
      variables: {
      },
    },
    result: {
      data: {
        proposer: [
          {
            height: 363345,
            validator: {
              consensus_address: 'desmosvalcons1c29eyczh5lw4npe0a9n40nm5g299fq8nt5lerw',
              validator_description: {
                moniker: 'KalpaTech',
                identity: 'B4AD06F0EB355573',
              },
              validator_voting_power: {
                voting_power: 5039,
              },
            },
          },
        ],
      },
    },
  },
];
