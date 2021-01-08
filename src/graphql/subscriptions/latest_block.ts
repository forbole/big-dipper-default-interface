import { gql } from '@apollo/client';

export const LATEST_BLOCK = gql`
  subscription LatestBlock {
    blocks: block(limit: 1, order_by: {height: desc}) {
      height
      num_txs
      hash
      timestamp
      validator {
        validator_description {
          moniker
          validator_address
          identity
        }
      }
    }
  }
`;
