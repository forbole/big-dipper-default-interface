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
