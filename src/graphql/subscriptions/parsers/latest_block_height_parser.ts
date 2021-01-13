import * as R from 'ramda';
import { LatestBlockHeight } from '@models';

export const latestBlockHeightParser = (data:any) => {
  return (
    LatestBlockHeight.fromJson(R.pathOr({
    }, ['subscriptionData', 'data', 'latest_height', 0], data))
  );
};
