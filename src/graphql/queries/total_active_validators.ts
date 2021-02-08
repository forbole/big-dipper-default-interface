/**
 * Used in home page to display xx out of xx active validators
 */
export const TOTAL_ACTIVE_VALIDATORS = `
query Validators ($height: bigint) {
  validator (where: {validator_info: {operator_address: {_is_null: false}}}){
    validator_statuses(where: {height: {_eq: $height}}, limit: 1) {
      jailed
      status
    }
  }
}
`;
