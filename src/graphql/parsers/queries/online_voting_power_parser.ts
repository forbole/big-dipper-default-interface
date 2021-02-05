import * as R from 'ramda';
import { OnlineVotingPower } from '@models';

export const onlineVotingPowerParser = (data:any): OnlineVotingPower[] => {
  return R.pathOr([], ['block'], data).map((x) => OnlineVotingPower.fromJson(x)).sort((a, b) => ((a.height > b.height) ? 1 : -1));
};
