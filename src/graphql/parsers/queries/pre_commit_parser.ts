import * as R from 'ramda';
import { PreCommit } from '@models';

export const preCommitsParser = (data:any): PreCommit[] => {
  return (
    R.pathOr([], ['pre_commit'], data)?.map((block) => PreCommit.fromJson(block))
  );
};
