export const PROPOSER = `
subscription Proposer {
  proposer: block(order_by: {height: desc}, limit: 1) {
    height
    validator {
      consensus_address
      validator_description {
        moniker
      }
validator_voting_power {
        voting_power
      }
    }
  }
}
`;
