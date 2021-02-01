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
