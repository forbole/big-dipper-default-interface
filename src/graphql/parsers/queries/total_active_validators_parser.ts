import * as R from 'ramda';
import { TotalActiveValidators } from '@models';

export const totalActiveValidatorsParser = (data:any): TotalActiveValidators => {
  return (
    TotalActiveValidators.fromJson(data ?? {
    })
  );
};

/**
 * Helper parser to get the latest height
 * @param data
 */
export const latestValidatorStatusHeightParser = (data:any): number | null => {
  return (
    R.pathOr(null, ['validator_status', 0, 'height'], data)
  );
};
