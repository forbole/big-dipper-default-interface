export const VALIDATOR_INFO = `
  query ValidatorInfo($address: String) {
    validator(where: {_or: [{validator_info: {consensus_address: {_eq: $address}}}, {validator_info: {operator_address: {_eq: $address}}}]}) {
      validator_info {
        operator_address
        self_delegate_address
        consensus_address
        max_change_rate
        max_rate
      }
      validator_commission {
        commission
      }
    }
  }
`;
