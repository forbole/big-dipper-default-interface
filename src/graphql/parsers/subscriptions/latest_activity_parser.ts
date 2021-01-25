import * as R from 'ramda';
import { LatestActivity } from '@models';

export const latestActivityParser = (data:any):LatestActivity[] => {
  return (
    R.pathOr([], ['subscriptionData', 'data', 'transaction'], data)?.map((block) => LatestActivity.fromJson(block))
  );
};
