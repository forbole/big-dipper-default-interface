export const USERINFO = `
query UserInfo {
  validator {
    validator_info {
      account {
        address
        delegations {
          amount
        }
        redelegations {
          amount
        }
        account_balances {
          coins
        }
        unbonding_delegations {
          amount
        }
      }
    }
  }
}
`;
