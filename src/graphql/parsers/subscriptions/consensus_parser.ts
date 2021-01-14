import * as R from 'ramda';
import { Consensus } from '@models';

export const ConsensusParser = (data:any):Consensus => {
  return (
    Consensus.fromJson(R.pathOr({
    }, ['subscriptionData', 'data', 'consensus', 0], data))

  );
};
