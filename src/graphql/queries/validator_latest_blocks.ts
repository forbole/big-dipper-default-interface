export const VALIDATOR_LATEST_BLOCKS = `
query LastHundredBlocks($address: String) {
  block(order_by: {height: desc}, limit: 100) {
    height
    proposer_address
    validator_voting_powers_aggregate {
      aggregate {
        sum {
          voting_power
        }
      }
    }
    pre_commits_aggregate {
      aggregate {
        sum {
          voting_power
        }
        count
      }
    }
    transactions_aggregate {
      aggregate {
        sum {
          gas_used
          gas_wanted
        }
      }
    }
    pre_commits(where: {
      _or: [
        {validator: {_or: [{validator_info: {consensus_address: {_eq: $address}}}, {validator_info: {operator_address: {_eq: $address}}}]}},
        { validator_address: {_eq: $address}}
      ]
    }) {
      height
      validator_address
    }
  }
}
`;
