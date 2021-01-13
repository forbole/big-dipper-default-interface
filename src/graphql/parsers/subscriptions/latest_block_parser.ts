import * as R from 'ramda';
import { LatestBlock } from '@models';

export const latestBlockParser = (data:any):LatestBlock[] => {
  return (
    R.pathOr([], ['subscriptionData', 'data', 'blocks'], data)?.map((block) => LatestBlock.fromJson(block))
  );
};
