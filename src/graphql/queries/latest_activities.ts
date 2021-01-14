export const LATEST_ACTIVITIES = `
  query Activities ($limit: Int, $offset: Int){
    transaction(limit: $limit, offset: $offset, order_by: {height: desc}) {
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
