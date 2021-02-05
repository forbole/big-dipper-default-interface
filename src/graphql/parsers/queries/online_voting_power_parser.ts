import * as R from 'ramda';
import { OnlineVotingPower } from '@models';

export const onlineVotingPowerParser = (data:any): OnlineVotingPower[] => {
  return R.pathOr([], ['block'], data).map((x) => OnlineVotingPower.fromJson(x));
};
