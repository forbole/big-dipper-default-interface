export const ONLINE_VOTING_POWER = `
query OnlineVotingPower {
  block(limit: 10, order_by: {height: desc}) {
    height
    pre_commits_aggregate {
      aggregate {
        sum {
          voting_power
        }
      }
    }
  }
}
`;
