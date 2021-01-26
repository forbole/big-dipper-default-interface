export const LATEST_BLOCKS = `
  query LatestBlocks ($limit: Int, $offset: Int){
    blocks: block(limit: $limit, offset: $offset, order_by: {height: desc}) {
      height
      num_txs
      hash
      timestamp
      validator {
        validator_info {
          operator_address
        }
        validator_descriptions {
          moniker
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
