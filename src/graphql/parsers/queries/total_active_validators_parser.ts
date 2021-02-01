import { TotalActiveValidators } from '@models';

export const totalActiveValidatorsParser = (data:any): TotalActiveValidators => {
  return (
    TotalActiveValidators.fromJson(data?.validator ?? [])
  );
};
