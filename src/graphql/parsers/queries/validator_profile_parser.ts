import * as R from 'ramda';
import { ValidatorProfile } from '@models';

export const validatorProfileParser = (data:any): ValidatorProfile | null => {
  const validator = R.pathOr(null, ['validator', 0], data);
  if (validator) {
    return ValidatorProfile.fromJson(validator);
  }

  return null;
};
