import * as R from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/ramda';
import { LatestBlock } from '@models';

export const latestBlockParser = (data:any):LatestBlock[] => {
  return (
    R.pathOr([], ['subscriptionData', 'data', 'blocks'], data)?.map((block) => LatestBlock.fromJson(block))
  );
};
