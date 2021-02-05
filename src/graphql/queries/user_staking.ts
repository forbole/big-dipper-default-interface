// export const TOTAL_VOTING_POWER = `
// query TotalVotingPower($height: bigint) {
//   total_voting_power: validator_voting_power_aggregate(where: {height: {_eq: $height}}) {
//     aggregate {
//       sum {
//         voting_power
//       }
//     }
//   }
// }`;

export const USER_STAKING = `
query UserStaking($address: String, $height: bigint) {
  total_voting_power: validator_voting_power_aggregate(where: {height: {_eq: $height}}) {
    aggregate {
      sum {
        voting_power
      }
    }
  }
  delegations: account(where: {address: {_eq: $address}}) {
    delegation_rewards(where: {height: {_eq: $height}}) {
      amount
    }
    delegations(where: {height: {_eq: $height}}) {
      amount
      validator_address
      validator {
        validator_voting_powers(limit: 1, where: {height: {_eq: $height}}) {
          voting_power
        }
        validator_commissions(limit: 1, where: {height: {_eq: $height}}) {
          commission
        }
      }
    }
  }
  redelegations: account(where: {address: {_eq: $address}}) {
    redelegations(where: {height: {_eq: $height}}) {
      delegator_address
      amount
      src_validator_address
      dst_validator_address
      completion_time
    }
  }
  unbondings: account(where: {address: {_eq: $address}}) {
    unbonding_delegations(where: {height: {_eq: $height}}) {
      validator_address
      amount
      completion_timestamp
    }
  }
}
`;
