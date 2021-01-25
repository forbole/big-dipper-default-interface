import * as R from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/ramda';
import { PreCommit } from '@models';

export const preCommitsParser = (data:any): PreCommit[] => {
  return (
    R.pathOr([], ['pre_commit'], data)?.map((block) => PreCommit.fromJson(block))
  );
};
