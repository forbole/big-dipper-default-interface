import * as R from 'ramda';
import {
// AVERAGE_BLOCK_LAST_MINUTE_QUERY,
// AVERAGE_BLOCK_LAST_HOUR_QUERY,
// AVERAGE_BLOCK_LAST_DAY_QUERY,
// AVERAGE_BLOCK_TIME_FROM_GENESIS_QUERY,
} from '@graphql/queries';
// import {
//   BlockTimeLastMinute,
//   BlockTimeLastHour,
//   BlockTimeLastDay,
//   BlockTimeGenesis,
// } from '@models';

export const averageBlockTimeDurationKeys = [
  'allTime',
  'lastMinute',
  'lastHour',
  'lastDay',
];
/**
 * Helper to get default durations
 */
export const getBlocktimeDurations = (t:any) => {
  return averageBlockTimeDurationKeys.map((x) => ({
    value: x,
    display: t(x),
  }));
};

/**
 * Helper object to get duration queries
 */
// export const DURATION_DATA = {
//   allTime: {
//     query: AVERAGE_BLOCK_TIME_FROM_GENESIS_QUERY,
//     model: BlockTimeGenesis,
//     getRawData: (data:any) => R.pathOr({
//     }, ['average_block_time_from_genesis', 0], data),
//   },
//   lastMinute: {
//     query: AVERAGE_BLOCK_LAST_MINUTE_QUERY,
//     model: BlockTimeLastMinute,
//     getRawData: (data:any) => R.pathOr({
//     }, ['average_block_time_per_minute', 0], data),
//   },
//   lastHour: {
//     query: AVERAGE_BLOCK_LAST_HOUR_QUERY,
//     model: BlockTimeLastHour,
//     getRawData: (data:any) => R.pathOr({
//     }, ['average_block_time_per_hour', 0], data),
//   },
//   lastDay: {
//     query: AVERAGE_BLOCK_LAST_DAY_QUERY,
//     model: BlockTimeLastDay,
//     getRawData: (data:any) => R.pathOr({
//     }, ['average_block_time_per_day', 0], data),
//   },
// };
