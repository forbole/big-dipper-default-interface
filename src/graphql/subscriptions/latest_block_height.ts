export const LATEST_BLOCK_HEIGHT = `
  subscription LatestHeight {
    latest_height: block(order_by: {height: desc}, limit: 1) {
      height
      timestamp
    }
  }
`;
