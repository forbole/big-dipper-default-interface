import * as R from 'ramda';
import { ActivityDetail } from '@models';

export const activityDetailParser = (data:any): ActivityDetail | null => {
  const activityDetail = R.pathOr(null, ['transaction', 0], data);
  if (activityDetail) {
    return ActivityDetail.fromJson(activityDetail);
  }

  return null;
};
