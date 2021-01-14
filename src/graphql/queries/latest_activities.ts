export const LATEST_ACTIVITIES = `
  query Activities($limit: Int, $offset: Int, $height: bigint_comparison_exp) {
    transaction(limit: $limit, offset: $offset, order_by: {height: desc}, where: {height: $height}) {
      timestamp
      hash
      height
      messages
      success
    }
    transaction_aggregate {
      aggregate {
        count
      }
    }
  }
`;
