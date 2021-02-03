export const USER_INFO_LATEST_HEIGHT = `
query UserInfoLatestHeight($address: String) {
  account(where: {address: {_eq: $address}}) {
    delegations(limit: 1, order_by: {height: desc}) {
      height
    }
    redelegations(limit: 1, order_by: {height: desc}) {
      height
    }
    unbonding_delegations(limit: 1, order_by: {height: desc}) {
      height
    }
  }
}
`;

export const USER_INFO = `
query UserInfo($address: String, $height: bigint) {
  account(where: {address: {_eq: $address}} limit:1) {
    address
    available: account_balances(where: {height: {_eq: $height}}) {
      coins
    }
    delegations(where: {height: {_eq: $height}}) {
      amount
    }
    redelegations: redelegations(where: {height: {_eq: $height}}) {
      amount
    }
    unbonding: unbonding_delegations(where: {height: {_eq: $height}}) {
      amount
    }
    rewards: delegation_rewards(where: {delegator_address: {_eq: $address}, height: {_eq: $height}}) {
      amount
    }
    validator: validator_infos(where: {self_delegate_address: {_eq: $address}}) {
      consensus_address
      operator_address
      self_delegate_address
      validator {
        commissions: validator_commission_amounts(where: {height: {_eq: $height}}) {
          amount
        }
      }
    }
  }
  token_price(limit: 1, order_by: {timestamp: desc}) {
     price
  }
}
`;
