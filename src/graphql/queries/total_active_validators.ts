/**
 * Used in home page to display xx out of xx active validators
 */
export const TOTAL_ACTIVE_VALIDATORS = `
query Validators($height: bigint) {
  active_validators: validator_aggregate(where: {validator_info: {operator_address: {_is_null: false}}, validator_statuses: {height: {_eq: $height}, status: {_eq: 3}, jailed: {_eq: false}}}) {
    aggregate {
      count
    }
  }
  not_active_validators: validator_aggregate(where: {validator_info: {operator_address: {_is_null: false}}, validator_statuses: {height: {_eq: $height},  _or: [{status: {_neq: 3}}, {status: {_eq: 3}, jailed: {_eq: true}}]}}) {
    aggregate {
      count
    }
  }
}
`;

/**
 * Used to first fetch the latest available status by height
 */
export const LATEST_VALIDATOR_STATUS_HEIGHT = `
query LatestStatusHeight {
  validator_status(limit: 1, order_by: {height: desc}) {
    height
  }
}
`;
