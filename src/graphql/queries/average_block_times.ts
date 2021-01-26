export const AVERAGE_BLOCK_TIMES = `
query AverageBlockTime{
  average_block_time_from_genesis(limit: 1, order_by: {height: desc}){
    average_time
  }
  average_block_time_per_minute(limit: 1, order_by: {height: desc}){
    average_time
  }
  average_block_time_per_hour(limit: 1, order_by: {height: desc}){
    average_time
  }
  average_block_time_per_day(limit: 1, order_by: {height: desc}){
    average_time
  }
}
`;
