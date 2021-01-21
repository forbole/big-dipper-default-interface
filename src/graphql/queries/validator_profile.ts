export const VALIDATOR_PROFILE = `
  query ValidatorProfile($address: String) {
    validator(where: {_or: [{validator_info: {consensus_address: {_eq: $address}}}, {validator_info: {operator_address: {_eq: $address}}}]}) {
      validator_description {
        moniker
        details
        identity
        website
      }
      validator_status {
        status
        jailed
      }
      validator_info {
        operator_address
      }
    }
  }
`;
