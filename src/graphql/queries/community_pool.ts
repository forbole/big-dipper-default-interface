export const COMMUNITY_POOL = `
  query CommunityPool {
    community_pool(limit: 1, order_by: {height: desc}) {
      coins
    }
  }
`;
