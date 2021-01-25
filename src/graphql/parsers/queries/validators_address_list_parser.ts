import * as R from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/ramda';
import { ValidatorAddressList } from '@models';

export const validatorAddressListParser = (data:any): ValidatorAddressList[] => {
  return (
    R.pathOr([], ['data', 'validator'], data).map((x) => ValidatorAddressList.fromJson(x))
  );
};
