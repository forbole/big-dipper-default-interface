export const VALIDATORLIST = `
query ValidatorListQuery {
  validator {
    self_delegations(order_by:{height:desc}, limit:1) {
      delegator_address
      amount
    }
    descriptions: validator_descriptions(limit: 1, order_by: {height: desc}) {
      moniker
      identity
    }
    validator_voting_powers(limit: 1, order_by: {height: desc}) {
      voting_power
    }
    validator_info {
      operator_address
    }
    validator_commissions(limit: 1, order_by: {height: desc}) {
      commission
    }
    validator_statuses(limit: 1, order_by: {height: desc}) {
      height
      jailed
      status
    }
  }
}
`;
