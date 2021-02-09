// wingman
// export const VALIDATOR_STAKING = `
// query ValidatorStaking($address: String, $height: bigint) {
//   validator(where: {_or: [{validator_info: {consensus_address: {_eq: $address}}}, {validator_info: {operator_address: {_eq: $address}}}]}) {
//     delegations(where: {height: {_eq: $height}}) {
//       amount
//       delegator_address
//     }
//     redelegations (where: {height: {_eq: $height}}) {
//       src_validator_address
//       dst_validator_address
//       delegator_address
//       amount
//     }
//     unbonding_delegations (where: {height: {_eq: $height}}) {
//       amount
//       delegator_address
//     }
//   }
// }
// `;

export const VALIDATOR_STAKING = `
query ValidatorStaking($address: String, $height: bigint, $time: timestamp) {
  validator(where: {_or: [{validator_info: {consensus_address: {_eq: $address}}}, {validator_info: {operator_address: {_eq: $address}}}]}) {
    delegations(where: {height: {_eq: $height}}) {
      amount
      delegator_address
    }
    redelegations(where: { completion_time: {_gt: $time}}, order_by: {completion_time: desc}) {
      src_validator_address
      dst_validator_address
      delegator_address
      amount
    }
    unbonding_delegations(where: { completion_timestamp: {_gt: $time}}, order_by: {completion_timestamp: desc}) {
      amount
      delegator_address
      completion_timestamp
    }
  }
}
`;
