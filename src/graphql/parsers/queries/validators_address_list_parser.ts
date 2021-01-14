import * as R from 'ramda';
import { ValidatorAddressList } from '@models';

export const validatorAddressListParser = (data:any): ValidatorAddressList[] => {
  return (
    R.pathOr([], ['data', 'validator'], data).map((x) => ValidatorAddressList.fromJson(x))
  );
};
