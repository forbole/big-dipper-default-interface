import * as R from 'ramda';
import { ValidatorStaking } from '@models';

export const validatorStakingParser = (data:any): ValidatorStaking => {
  const validator = R.pathOr({
  }, ['validator', 0], data);
  return ValidatorStaking.fromJson(validator);
};
