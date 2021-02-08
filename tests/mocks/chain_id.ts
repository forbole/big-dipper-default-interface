import { CHAIN_ID } from '@graphql/queries';
import { gql } from '@apollo/client';

export const CHAIN_ID_MOCK_DATA = [
  {
    request: {
      query: gql`${CHAIN_ID}`,
    },
    result: {
      data: {
        genesis: [
          {
            chain_id: 'morpheus-13001',
          },
        ],
      },
    },
  },
];
