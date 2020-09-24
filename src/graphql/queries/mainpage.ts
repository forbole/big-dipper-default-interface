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
      query LatestBlockHeight {
  block(limit: 1, order_by: {height: desc}) {
    height
  }
}`;

export const AverageBlockTimeAllTime = gql`
query AverageBlockTimeAllTime{
  average_block_time_from_genesis(limit: 1, order_by: {height: desc}){
    average_time
  }
}`;

export const AverageBlockTimeLastMinute = gql`
query AverageBlockTimeLastMinute{
  average_block_time_per_minute(limit: 1, order_by: {height: desc}){
    average_time
  }
}`;

export const AverageBlockTimeLastHour = gql`
query AverageBlockTimeLastHour{
  average_block_time_per_hour(limit: 1, order_by: {height: desc}){
    average_time
  }
}`;

export const AverageBlockTimeLastDay = gql`
query AverageBlockTimeLastDay{
  average_block_time_per_day(limit: 1, order_by: {height: desc}){
    average_time
  }
}`;

