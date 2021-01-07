import { gql } from '@apollo/client';

export const LATEST_BLOCKS = gql`
  query LatestBlocks ($limit: Int, $offset: Int){
    blocks: block(limit: $limit, offset: $offset, order_by: {height: desc}) {
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
    block_aggregate {
      aggregate {
        count
      }
    }
  }
`;
