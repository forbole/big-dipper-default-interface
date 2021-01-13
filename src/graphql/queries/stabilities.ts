export const STABILITIES = `
  query Stabilities{
    pool: staking_pool_history(order_by: {height: desc}, limit: 1) {
      bonded_tokens
      not_bonded_tokens
    }
    total_tokens: supply(order_by: {height: desc}, limit: 1) {
      coins
    }
    community_pool: community_pool(order_by: {height: desc}, limit: 1) {
      coins
    }
    inflation: inflation_history(order_by: {height: desc}, limit: 1) {
      value
    }
  }
`;
