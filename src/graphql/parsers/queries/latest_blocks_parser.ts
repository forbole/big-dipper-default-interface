import * as R from 'ramda';
import { LatestBlock } from '@models';

export const latestBlocksParser = (data:any): LatestBlock[] => {
  return (
    R.pathOr([], ['blocks'], data)?.map((block) => LatestBlock.fromJson(block))
  );
};

export const latestBlocksTotalParser = (data:any): number => {
  return (
    R.pathOr(0, ['block_aggregate', 'aggregate', 'count'], data)
  );
};
