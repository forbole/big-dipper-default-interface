export const VALIDATOR_POWER_EVENTS = `
  query ValidatorPowerEvents($address: String, $offset: Int, $limit: Int) {
    block(limit: $limit, offset: $offset, order_by: {height: desc}) {
      validator_voting_powers(where: {validator: {_or: [{validator_info: {consensus_address: {_eq: $address}}}, {validator_info: {operator_address: {_eq: $address}}}]}}) {
        voting_power
      }
      transactions {
        messages
      }
      height
    }
  }
`;
