export const USERINFO = `
query UserInfo {
  account(where: {address: {_eq: "desmos1ympu6mhnusc2l8egneyg4lvahwk064harllz5g"}}) {
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
}
`;
