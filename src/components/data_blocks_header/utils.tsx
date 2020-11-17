import {
  AVERAGE_BLOCK_LAST_MINUTE_QUERY,
  AVERAGE_BLOCK_LAST_HOUR_QUERY,
  AVERAGE_BLOCK_LAST_DAY_QUERY,
  AVERAGE_BLOCK_TIME_FROM_GENESIS_QUERY,
} from '@graphql/queries';

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
export const DURATION_DATA = {
  allTime: {
    query: AVERAGE_BLOCK_TIME_FROM_GENESIS_QUERY,
  },
  lastMinute: {
    query: AVERAGE_BLOCK_LAST_MINUTE_QUERY,
  },
  lastHour: {
    query: AVERAGE_BLOCK_LAST_HOUR_QUERY,
  },
  lastDay: {
    query: AVERAGE_BLOCK_LAST_DAY_QUERY,
  },
};
