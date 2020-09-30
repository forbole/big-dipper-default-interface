import { gql } from '@apollo/client';

export const LATEST_BLOCK_HEIGHT = gql`
      subscription LatestBlockHeight {
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

export const BLOCK_INFO = gql`
subscription LatestBlocks {
  block(limit: 9, order_by: {height: desc}) {
    hash
    proposer {
      validator_infos {
        validator_descriptions(order_by: {timestamp: desc}) {
          moniker
        }
      }
    }
    height
    num_txs
    timestamp
  }
}`;

// blockInfoFromLimit return the last n block info 
export function blockInfoFromLimit(numLimit: number) {
  return gql`
  subscription LatestBlocks {
    block(limit: numLimit, order_by: {height: desc}) {
      hash
      proposer {
        validator_infos {
          validator_descriptions(order_by: {timestamp: desc}) {
            moniker
          }
        }
      }
      height
      num_txs
      timestamp
    }
  }`;
}