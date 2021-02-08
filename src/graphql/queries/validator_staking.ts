export const VALIDATOR_STAKING = `
query ValidatorStaking($address: String, $height: bigint) {
  validator(where: {_or: [{validator_info: {consensus_address: {_eq: $address}}}, {validator_info: {operator_address: {_eq: $address}}}]}) {
    delegations(where: {height: {_eq: $height}}) {
      amount
      delegator_address
    }
    redelegations (where: {height: {_eq: $height}}) {
      src_validator_address
      dst_validator_address
      delegator_address
      amount
    }
    unbonding_delegations (where: {height: {_eq: $height}}) {
      amount
      delegator_address
    }
  }
}
`;
