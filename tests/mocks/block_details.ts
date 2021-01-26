import { BLOCK_DETAILS } from '@graphql/queries';
import { gql } from '@apollo/client';

export const BLOCK_DETAILS_MOCK_DATA = [
  {
    request: {
      query: gql`${BLOCK_DETAILS}`,
      variables: {
        height: null,
      },
    },
    result: {
      data: {
        pool: [
          {
            bonded_tokens: 64124341001,
          },
        ],
        block: [
          {
            hash: 'C6F9A3665E2F100DC752667C030C5A7EDF70B550296DDE7CEAD79F73EEFBE1A8',
            timestamp: '2020-10-06T06:10:13.602618',
            num_txs: 0,
            validator: {
              validator_descriptions: {
                moniker: 'Poseidon',
                identity: null,
                validator_address: 'desmosvalcons1mxrd5cyjgpx5vfgltrdufq9wq4ynwc799ndrg8',
              },
            },
            height: 123,
            pre_commits: 21,
          },
        ],
        pre_commit: [],
      },
    },
  },
];
