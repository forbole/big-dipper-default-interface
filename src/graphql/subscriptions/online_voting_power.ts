export const ONLINE_VOTING_POWER = `
subscription OnlineVotingPower {
  block(offset: 1, limit: 50, order_by: {height: desc}) {
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
