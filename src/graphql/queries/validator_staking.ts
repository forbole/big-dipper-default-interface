export const VALIDATOR_STAKING = `
  query ValidatorStaking($address: String) {
    validator(where: {_or: [{validator_info: {consensus_address: {_eq: $address}}}, {validator_info: {operator_address: {_eq: $address}}}]}) {
      delegations {
        amount
        delegator_address
      }
      redelegations {
        src_validator_address
        dst_validator_address
        delegator_address
        amount
      }
      unbonding_delegations {
        amount
        delegator_address
      }
    }
  }
`;
