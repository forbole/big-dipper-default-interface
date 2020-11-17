import { gql } from '@apollo/client';

export const LATEST_BLOCK_HEIGHT_QUERY = gql`
  query LatestBlockHeight {
    block(limit: 1, order_by: {height: desc}) {
      height
  }
}`;

export const AVERAGE_BLOCK_TIME_FROM_GENESIS = gql`
subscription AverageBlockTimeAllTime{
  average_block_time_from_genesis(limit: 1, order_by: {height: desc}){
    average_time
  }
}`;

export const AVERAGE_BLOCK_LAST_MINUTE = gql`
subscription AverageBlockTimeLastMinute{
  average_block_time_per_minute(limit: 1, order_by: {height: desc}){
    average_time
  }
}`;

export const AVERAGE_BLOCK_LAST_HOUR = gql`
subscription AverageBlockTimeLastHour{
  average_block_time_per_hour(limit: 1, order_by: {height: desc}){
    average_time
  }
}`;

export const AVERAGE_BLOCK_LAST_DAY = gql`
subscription AverageBlockTimeLastDay{
  average_block_time_per_day(limit: 1, order_by: {height: desc}){
    average_time
  }
}`;

// blockInfoFromLimit return the last n block info
export const BLOCK_INFO_LIMIT = gql`
subscription LatestBlocks($limit: Int!) {
  block(limit: $limit, order_by: {height: desc}) {
    hash
    proposer {
      validator_infos {
        validator_descriptions(order_by: {timestamp: desc}) {
          moniker
          operator_address
        }
      }
    }
    height
    num_txs
    timestamp
  }
}`;

export const CONSENSUS_STATE = gql`
  subscription consensus_state{
    consensus{
      height
      round
      step
    }
  }
`;
