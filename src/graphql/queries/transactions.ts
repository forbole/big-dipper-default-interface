import { gql } from '@apollo/client';

export const LATEST_TRANSACTIONS_QUERY = gql`
query LatestActivies($limit: Int!, $offset: Int!) {
  transaction(order_by: {timestamp: desc}, where: {messages: {_is_null: false}}, limit: $limit, offset: !offset) {
    messages
  }
}
`;

export const DELEGATION_QUERY = gql`
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
