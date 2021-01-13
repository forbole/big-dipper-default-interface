/**
 * Used in home page to display xx out of xx active validators
 */
export const TOTAL_ACTIVE_VALIDATORS = `
  query Validators {
    active_validators: validator_aggregate(where: {validator_status: {status: {_eq: 2}}}) {
      aggregate {
        count
      }
    }
    not_active_validators: validator_aggregate(where: {validator_status: {status: {_neq: 2}}}) {
      aggregate {
        count
      }
    }
  }
`;
