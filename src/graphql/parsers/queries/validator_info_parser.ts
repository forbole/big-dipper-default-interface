import * as R from 'ramda';
import { ValidatorInfo } from '@models';

export const validatorInfoParser = (data:any): ValidatorInfo => {
  const validator = R.pathOr(null, ['validator', 0], data);
  return ValidatorInfo.fromJson(validator);
};
