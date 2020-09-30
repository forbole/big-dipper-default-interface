import { gql } from '@apollo/client';

// descriptionHistory return all description history as the validator modified their description
export function descriptionHistory(operator: string) {
  return gql`
  query DescriptionHistory {
    validator_description(where: {operator_address: {_eq: operator}}, order_by: {height: desc}) {
      details
      identity
      moniker
      operator_address
      height
    }
  }
}`;
}

// VALIDATOR_LIST return a list of validator as "Active validators" on big Dipper
export const VALIDATOR_LIST = gql`
  query validators {
  validator {
    validator_infos {
      validator_descriptions {
        moniker
      }
      self_delegate_address
      validator_delegation_shares {
        delegator_address
        operator_address
        shares
      }
      validator_commission {
        commission
      }
    }
    validator_voting_powers(order_by: {height: desc}, limit: 1) {
      voting_power
    }
    validator_uptimes(order_by: {height: desc}, limit: 1) {
      missed_blocks_counter
      signed_blocks_window
    }
  }
}`;

