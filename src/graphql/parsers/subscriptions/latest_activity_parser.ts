import * as R from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/ramda';
import { LatestActivity } from '@models';

export const latestActivityParser = (data:any):LatestActivity[] => {
  return (
    R.pathOr([], ['subscriptionData', 'data', 'transaction'], data)?.map((block) => LatestActivity.fromJson(block))
  );
};
