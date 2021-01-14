import * as R from 'ramda';
import { Proposer } from '@models';

export const ProposerParser = (data:any):Proposer => {
  return (
    Proposer.fromJson(R.pathOr({
    }, ['subscriptionData', 'data', 'proposer', 0], data))

  );
};
