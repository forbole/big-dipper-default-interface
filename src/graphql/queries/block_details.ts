export const BLOCK_DETAILS = `
query BlockDetail($height: bigint) {
  pool: staking_pool(limit: 1, where: {height: {_eq: $height}}) {
    bonded_tokens
  }
  block(limit: 1, where: {height: {_eq: $height}}) {
    hash
    timestamp
    num_txs
    validator {
      validator_descriptions {
        moniker
        identity
        validator_address
      }
    }
    height
  }
  pre_commit(where: {height: {_eq: $height}}) {
    voting_power
    validator {
      validator_descriptions {
        identity
        moniker
      }
    }
    proposer_priority
    validator_address
  }
}
`;
