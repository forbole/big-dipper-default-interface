export const LATEST_ACTIVITY = `
  subscription LatestActivity {
    transaction(limit: 1, order_by: {height: desc}) {
      block {
        timestamp
      }
      hash
      height
      messages
      success
    }
  }
`;
