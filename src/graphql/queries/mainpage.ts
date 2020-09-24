import { gql } from '@apollo/client';

export class block {
  public height: number;
  constructor(payload: any) {
    this.height = payload.height;
  }
  static fromJson(json: any) {
    return new block({
      height: json.height,
    });
  }
}

export const latestBlockHeight = gql`
      subscription LatestBlockHeight {
  block(limit: 1, order_by: {height: desc}) {
    height
  }
}`;

export const AverageBlockTimeAllTime = gql`
subscription AverageBlockTimeAllTime{
  average_block_time_from_genesis(limit: 1, order_by: {height: desc}){
    average_time
  }
}`;

export const AverageBlockTimeLastMinute = gql`
subscription AverageBlockTimeLastMinute{
  average_block_time_per_minute(limit: 1, order_by: {height: desc}){
    average_time
  }
}`;

export const AverageBlockTimeLastHour = gql`
subscription AverageBlockTimeLastHour{
  average_block_time_per_hour(limit: 1, order_by: {height: desc}){
    average_time
  }
}`;

export const AverageBlockTimeLastDay = gql`
subscription AverageBlockTimeLastDay{
  average_block_time_per_day(limit: 1, order_by: {height: desc}){
    average_time
  }
}`;

export const LatestBlocks = gql`
subscription LatestBlocks {
  block(limit: 9, order_by: {height: desc}) {
    hash
    proposer {
      validator_infos {
        validator_descriptions(order_by: {timestamp: desc}, limit: 1) {
          moniker
        }
      }
    }
    height
    num_txs
    timestamp
  }
}`;

export const LatestActivities = gql`

`;