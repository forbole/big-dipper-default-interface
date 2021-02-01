import * as R from 'ramda';
import { ValidatorList } from '@models';

export const validatorListParser = (data:any): ValidatorList[] => {
  return R.pathOr([], ['validator'], data).map((x) => ValidatorList.fromJson(x));
};
