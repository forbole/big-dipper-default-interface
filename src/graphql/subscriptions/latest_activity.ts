export const LATEST_ACTIVITY = `
  subscription LatestActivity {
    transaction(limit: 1, order_by: {height: desc}) {
      timestamp
      hash
      height
      messages
      success
    }
  }
`;
