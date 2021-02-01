/**
 * Used in home page to display xx out of xx active validators
 */
export const TOTAL_ACTIVE_VALIDATORS = `
query Validators($height: bigint) {
  active_validators: validator_status_aggregate(where: {height: {_eq: $height}, _or: [{status: {_eq: 2}}, {status: {_eq: 3}}]}) {
    aggregate {
      count
    }
  }
  not_active_validators: validator_status_aggregate(where: {height: {_eq: $height}, _or: [{status: {_eq: 0}}, {status: {_eq: 1}}]}) {
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
