import * as R from 'ramda';
import { LatestBlock } from '@models';

export const latestBlocksParser = (data:any) => {
  return (
    R.pathOr([], ['subscriptionData', 'data', 'blocks'], data)?.map((block) => LatestBlock.fromJson(block))
  );
};
