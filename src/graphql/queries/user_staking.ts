export const USER_STAKING = `
query UserStaking($address: String, $height: bigint, $utc: timestamp) {
  total_voting_power: validator_voting_power_aggregate(where: {height: {_eq: $height}}) {
    aggregate {
      sum {
        voting_power
      }
    }
  }
  delegation_reward(where: {height: {_eq: $height}, delegator_address: {_eq: $address}}) {
    delegator_address
    validator_address
    amount
  }
  account: account(where: {address: {_eq: $address}}) {
    delegation_rewards(where: {height: {_eq: $height}}) {
      amount
      validator_address
    }
    delegations(where: {height: {_eq: $height}}) {
      amount
      validator_address
      validator {
        validator_descriptions{
          moniker
          identity
        }
        validator_voting_powers(limit: 1, where: {height: {_eq: $height}}) {
          voting_power
        }
        validator_commissions(limit: 1, where: {height: {_eq: $height}}) {
          commission
        }
      }
    }
    redelegations: redelegations(where: {completion_time: {_gt: $utc}}) {
      delegator_address
      amount
      src_validator_address
      dst_validator_address
      completion_time
    }
    unbondings: unbonding_delegations(where: {completion_timestamp: {_gt: $utc}}) {
      validator_address
      amount
      completion_timestamp
    }
  }
}
`;
