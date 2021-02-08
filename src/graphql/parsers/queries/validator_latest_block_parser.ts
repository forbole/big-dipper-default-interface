import * as R from 'ramda';
import { ValidatorLatestBlock } from '@models';

export const validatorLatestBlockParser = (data:any): ValidatorLatestBlock[] => {
  return R.pathOr([], ['block'], data).map((x) => (
    ValidatorLatestBlock.fromJson(x)
  ));
};
