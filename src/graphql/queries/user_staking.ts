export const TOTAL_VOTING_POWER = `
query TotalVotingPower($height: bigint) {
  total_voting_power: validator_voting_power_aggregate(where: {height: {_eq: $height}}) {
    aggregate {
      sum {
        voting_power
      }
    }
  }
}`;

export const USER_STAKING = `
query MyQuery($address: String) {
  account(where: {address: {_eq: $address}}) {
    delegations(order_by: {height: desc}) {
      validator_address
      amount
      delegator_address
      height
      account {
        self_delegations: delegations(order_by: {height: desc}, where: {delegator_address: {_eq: $address}}) {
          amount
        }
        delegation_rewards {
          amount
        }
      }
      validator {
        validator_commissions(limit: 1, order_by: {height: desc}) {
          commission
        }
        validator_voting_powers(limit: 1, order_by: {height: desc} where: {validator_address: {_eq: $address}}) {
          voting_power
        }
      }
    }
    redelegations(order_by: {height: desc}) {
      amount
      height
      delegator_address
      dst_validator_address
      src_validator_address
      completion_time
    }
    unbonding_delegations(order_by: {height: desc}) {
      amount
      validator_address
      height
      completion_timestamp
    }
  }
}
`;
