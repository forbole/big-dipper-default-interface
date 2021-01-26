export const VALIDATOR_PROFILE = `
query ValidatorProfile($address: String) {
  validator(where: {_or: [{validator_info: {consensus_address: {_eq: $address}}}, {validator_info: {operator_address: {_eq: $address}}}]}) {
    validator_descriptions {
      moniker
      details
      identity
      website
    }
    validator_statuses(order_by: {height: desc}, limit: 1) {
      status
      jailed
      height
    }
    validator_info {
      operator_address
    }
  }
}
`;
