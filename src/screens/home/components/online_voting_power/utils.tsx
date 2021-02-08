import * as R from 'ramda';
import { OnlineVotingPower } from '@models';

export const linearGradientData: {
  offset: number;
  color: string;
}[] = [
  {
    offset: 0,
    color: '#FD9526',
  },
  {
    offset: 25,
    color: '#f5d442',
  },
  {
    offset: 50,
    color: '#f03a85',
  },
  {
    offset: 75,
    color: '#b641fa',
  },
];

/**
 * Helper function to check if values need to be changed in order to display a linear gradient
 * @param data
 */
export const gradientLineHelper = (data: OnlineVotingPower[]): boolean => {
  console.log(data, 'data');
  const cloneData = R.clone(data);
  const parsed = cloneData.reduce((a, b) => {
    a.add(b.votingPower);
    return a;
  }, new Set());

  // linear gradient will not show unless there is a different value
  if (parsed.size <= 1 && cloneData.length) {
    cloneData[cloneData.length - 1]
      .votingPowerUiValue = cloneData[cloneData.length - 1].votingPowerUiValue + 1;
  }

  return cloneData;
};
