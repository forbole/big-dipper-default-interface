import * as R from 'ramda';
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
