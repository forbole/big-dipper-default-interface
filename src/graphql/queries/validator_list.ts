export const VALIDATOR_LIST = `
query Validators {
  pool: staking_pool(order_by: {height: desc}, limit: 1) {
    bonded_tokens
  }
  validator {
    validator_info {
      operator_address
    }
    validator_descriptions(order_by: {height: desc}, limit: 1) {
      moniker
      identity
    }
    validator_voting_powers(order_by: {height: desc}, limit: 1) {
      voting_power
    }
    validator_commissions(order_by: {height: desc}, limit: 1) {
      commission
    }
    validator_statuses(order_by: {height: desc}, limit: 1) {
      height
      jailed
      status
    }
    validator_signing_infos(order_by: {height: desc}, limit: 1) {
      missed_blocks_counter
    }
    self_delegations(limit: 1, order_by: {height: desc}) {
      amount
    }
  }
  slashing_params(order_by: {height: desc}, limit: 1) {
    signed_block_window
  }
}
`;
