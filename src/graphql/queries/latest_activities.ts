export const LATEST_ACTIVITIES = `
  query Activities($limit: Int, $offset: Int, $height: bigint) {
    transaction(limit: $limit, offset: $offset, order_by: {height: desc}, where: {height: {_eq: $height}}) {
      timestamp
      hash
      height
      messages
      success
    }
    transaction_aggregate(where: {height: {_eq: $height}}) {
      aggregate {
        count
      }
    }
  }
`;
