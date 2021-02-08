export const CHAIN_ID = `
query MyQuery {
  genesis(limit: 1, order_by: {time: desc}) {
    chain_id
  }
}
`;
