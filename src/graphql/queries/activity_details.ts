export const ACTIVITY_DETAILS = `
  query ActivityDetails($hash: String) {
    transaction(where: {hash: {_eq: $hash}}) {
      hash
      height
      fee
      gas_used
      gas_wanted
      success
      memo
      messages
      block {
        timestamp
      }
    }
  }
`;
