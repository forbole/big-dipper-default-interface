import { gql } from '@apollo/client';

/**
 * Get the latest block height
 */
export const LATEST_BLOCK_HEIGHT_QUERY = gql`
  query LatestBlockHeight {
    block(limit: 1, order_by: {height: desc}) {
      height
  }
}`;

/**
 * Get the average block time from genesis
 */
export const AVERAGE_BLOCK_TIME_FROM_GENESIS_QUERY = gql`
query AverageBlockTimeAllTime{
  average_block_time_from_genesis(limit: 1, order_by: {height: desc}){
    average_time
  }
}`;

/**
 * Get the average block time by last minute
 */
export const AVERAGE_BLOCK_LAST_MINUTE_QUERY = gql`
query AverageBlockTimeLastMinute{
  average_block_time_per_minute(limit: 1, order_by: {height: desc}){
    average_time
  }
}`;

/**
 * Get the average block time by last hour
 */
export const AVERAGE_BLOCK_LAST_HOUR_QUERY = gql`
query AverageBlockTimeLastHour{
  average_block_time_per_hour(limit: 1, order_by: {height: desc}){
    average_time
  }
}`;

/**
 * Get the average block time by last 24 hours
 */
export const AVERAGE_BLOCK_LAST_DAY_QUERY = gql`
query AverageBlockTimeLastDay{
  average_block_time_per_day(limit: 1, order_by: {height: desc}){
    average_time
  }
}`;

/**
 * Get the latest blocks with pagination
 * @param limit limits the amount of data coming back
 * @param offset offset
 */
export const LATEST_BLOCKS_QUERY = gql`
query LatestBlocks($limit: Int!, $offset: Int!) {
  block(limit: $limit, order_by: {height: desc}, offset: $offset) {
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
