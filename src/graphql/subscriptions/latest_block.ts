export const LATEST_BLOCK = `
  subscription LatestBlock {
    blocks: block(limit: 1, order_by: {height: desc}) {
      height
      num_txs
      hash
      timestamp
      validator {
        validator_descriptions {
          moniker
          validator_address
          identity
        }
      }
    }
  }
`;
