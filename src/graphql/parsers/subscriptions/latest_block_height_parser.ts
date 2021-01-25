import * as R from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/ramda';
import { LatestBlockHeight } from '@models';

export const latestBlockHeightParser = (data:any):LatestBlockHeight => {
  return (
    LatestBlockHeight.fromJson(R.pathOr({
    }, ['subscriptionData', 'data', 'latest_height', 0], data))
  );
};
