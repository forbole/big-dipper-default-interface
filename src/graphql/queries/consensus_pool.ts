export const CONSENSUS_POOL = `
query ConsensusPool {
  pool: staking_pool_history(order_by: {height: desc}, limit: 1) {
     bonded_tokens
   }
 }
`;
