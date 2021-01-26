import { LATEST_BLOCK } from '@graphql/subscriptions';
import { gql } from '@apollo/client';

export const LATEST_BLOCK_MOCK_DATA = [
  {
    request: {
      query: gql`${LATEST_BLOCK}`,
      variables: {
      },
    },
    result: {
      data: {
        blocks: [
          {
            height: 65900,
            num_txs: 0,
            hash: 'E7DF24A2302397F87E1340A8E1D076EFF3E341F33EA002CE21A03DC5D6AB0A4E',
            timestamp: '2020-10-10T16:15:00.490683',
            validator: {
              validator_descriptions: [{
                moniker: 'Minutemen',
                validator_address: 'desmosvalcons1y55lyzklnxn4s9qw5s9pzu8gj0uv8pp3n3xyhy',
                identity: '72FA05B22F47EB17',
              }],
            },
          },
        ],
      },
    },
  },
];
