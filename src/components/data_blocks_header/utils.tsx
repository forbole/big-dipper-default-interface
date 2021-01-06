/**
 * Helper to get default durations
 */
export const getBlocktimeDurations = (t:any) => {
  return [
    'allTime',
    'lastMinute',
    'lastHour',
    'lastDay',
  ].map((x) => ({
    value: x,
    display: t(x),
  }));
};
