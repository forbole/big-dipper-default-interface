import * as R from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/ramda';
import { LatestActivity } from '@models';

export const latestActivitiesParser = (data:any): LatestActivity[] => {
  return (
    R.pathOr([], ['transaction'], data)?.map((block) => LatestActivity.fromJson(block))
  );
};

export const latestActivitiesTotalParser = (data:any): number => {
  return (
    R.pathOr(0, ['transaction_aggregate', 'aggregate', 'count'], data)
  );
};
