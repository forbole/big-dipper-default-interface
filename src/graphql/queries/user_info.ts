export const USERINFO = `query USERINFO($address: String) {
  pool: account(where: {address: {_eq: $address}}) {
    address
    account_balances {
      coins
    }
    delegations {
      amount
    }
    redelegations {
      amount
    }
    unbonding_delegations {
      amount
    }
  }
  token_price(limit: 1, order_by: {timestamp: desc}) {
    price
  }
}`;

export const USERINFO1 = `
query UserInfo($address: String, $height: bigint) {
  account(where: {address: {_eq: $address}}) {
    address
    available: account_balances(where: {height: {_eq: $height}}) {
      coins
    }
    delegated: delegations(where: {height: {_eq: $height}}) {
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
}
`;
