import * as R from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/ramda';
import { BlockDetail } from '@models';

export const blockDetailsParser = (data:any): BlockDetail | null => {
  if (!data?.block?.length) {
    return null;
  }
  return (
    R.pathOr(null, ['block'], data)?.map((block) => BlockDetail.fromJson(block))?.[0]
  );
};
