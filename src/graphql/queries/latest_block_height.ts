export const LATEST_BLOCK_HEIGHT = `
query LatestBlockHeight {
  block(limit: 1, order_by: {height: desc}) {
    height
  }
}
`;
