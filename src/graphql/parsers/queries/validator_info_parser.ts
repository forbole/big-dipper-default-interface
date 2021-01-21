import * as R from 'ramda';
import { ValidatorInfo } from '@models';

export const validatorInfoParser = (data:any): ValidatorInfo | null => {
  const validator = R.pathOr(null, ['validator', 0], data);
  if (validator) {
    return ValidatorInfo.fromJson(validator);
  }

  return null;
};
