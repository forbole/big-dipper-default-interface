/**
 * Used in home page to display xx out of xx active validators
 */
export const TOTAL_ACTIVE_VALIDATORS = `
query Validators {
  validator (where: {validator_info: {operator_address: {_is_null: false}}}){
    validator_statuses(order_by: {height: desc}, limit: 1) {
      jailed
      status
    }
  }
}
`;
