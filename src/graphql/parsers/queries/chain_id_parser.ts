import * as R from 'ramda';
import { ChainId } from '@models';

export const chainIdParser = (data:any): ChainId => {
  return (
    ChainId.fromJson(R.pathOr({
    }, ['genesis', 0], data))
  );
};
