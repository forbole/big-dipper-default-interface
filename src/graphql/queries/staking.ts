import { gql } from '@apollo/client';

// descriptionHistory return all description history as the validator modified their description
export const VALIDATOR_DISCRIPTION= gql`
  query DescriptionHistory($address: String!) {
  validator_description(where: {operator_address: {_eq: $address}}, order_by: {height: desc}) {
    details
    identity
    moniker
    operator_address
    height
  }
}`;

export const VALIDATOR_INFO = gql`
query DescriptionHistory($address: String!) {
  validator_info(where: {operator_address: {_eq: $address}}) {
    self_delegate_address
    operator_address
    validator_commission {
      commission
    }
    validator_info {
      max_change_rate
      max_rate
    }
  }
}`;

export const POTENTIAL = gql`
query DescriptionHistory($address: String!) {
  validator_info(where: {operator_address: {_eq: $address}}) {
    self_delegate_address
    operator_address
    max_change_rate
    max_rate
    validator_commission {
      commission
    }
  }
  proposal_aggregate(where: {proposer: {_eq: $address}}) {
    aggregate {
      count(columns: proposal_id)
    }
  }
  validator_delegation_shares_aggregate(where: {account: {address: {_eq: $address}}}) {
    aggregate {
      count(columns: delegator_address)
    }
  }
  validator_uptime(where: {validator: {}, validator_address: {_eq: $address}}) {
    signed_blocks_window
    missed_blocks_counter
  }
}
`;

export const VOTING_POWER = gql`
  query MyQuery($consAddress: String!, $limit: Int!) {
    validator_voting_power(where: {consensus_address: {_eq: $consAddress}}, limit: $limit) {
      voting_power
      height
    }
    validator_delegation_shares(where: {validator_info: {consensus_address: {_eq: $consAddress}}}, limit: $limit) {
      shares
      timestamp
    }
    validator_info(where: {consensus_address: {_eq: $consAddress}}) {
      self_delegate_address
    }
  }
`;

export const DELEGATION = gql`
  query MyQuery($consAddress: String!, $limit: Int!) {
    validator_delegation_shares(where: {validator_info: {consensus_address: {_eq: $consAddress}}}, limit: $limit) {
      shares
      delegator_address
    }
  }
`;

export const REDELEGATION = gql`
  query MyQuery($consAddress: String!, $limit: Int!) {
    validator_redelegation(where: {validator: {consensus_address: {_eq: $consAddress}}}, limit: $limit) {
      amount
      src_validator_address
      dst_validator_address
    }
    validator_redelegation_aggregate(where: {src_validator_address: {_eq: $consAddress}}) {
      aggregate {
        count(distinct: true, columns: dst_validator_address)
      }
    }
  }
`;

export const UNDELEGATION = gql`
  query MyQuery($consAddress: String!, $limit: Int!) {
  validator_unbonding_delegation_aggregate(where: {consensus_address: {_eq: $consAddress}}) {
    aggregate {
      count(columns: delegator_address)
    }
  }
  validator_unbonding_delegation(limit: $limit, where: {consensus_address: {_eq: $consAddress}}) {
    amount
    delegator_address
  }
}

`;

// VALIDATOR_LIST return a list of validator as "Active validators" on big 
// !!!!NO VOTING POWER% CALCULATION
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

