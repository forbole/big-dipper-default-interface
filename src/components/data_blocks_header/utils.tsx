// WithCustom.args = {
//   label: 'Latest Block Height',
//   value: '15,000',
//   selectedValue: '24',
//   customComponent: <DataBlockCustom />,
//   durations: [{
//     value: '7_hours',
//     display: 'Last 7 hours',
//     callback: (key) => {
//       console.log(`called with key: ${key}`);
//     },
//   }, {
//     value: '24',
//     display: '24 hours',
//     callback: (key) => {
//       console.log(`called with key: ${key}`);
//     },
//   }],
// };

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
