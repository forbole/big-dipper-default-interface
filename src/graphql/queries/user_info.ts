// export const address = 'desmos1qpm8wutycha3ncd0u3w9g42v89xnnfs6f9sg8d';

export const getUserInfoQuery = (address: string) => {
  return `
  pool: account(where: {address: {_eq: ${address}}}) {
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
  }`;
};

export const USERINFO = `query USERINFO {
  pool: account(where: {address: {_eq: desmos1qpm8wutycha3ncd0u3w9g42v89xnnfs6f9sg8d}}) {
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
}`;
