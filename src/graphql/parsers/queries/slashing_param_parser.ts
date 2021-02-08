import * as R from 'ramda';
import { SlashingParam } from '@models';

export const slashingParamParser = (data:any): SlashingParam => {
  return (
    SlashingParam.fromJson(R.pathOr({
    }, ['slashing_params', 0], data))
  );
};
