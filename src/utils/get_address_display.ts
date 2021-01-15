import { ValidatorAddressList } from '@models';

/**
 * Helper function to handle address formatting based on role
 */
export const getAddressDisplay = (
  address:string,
  validators: {[key:string]:ValidatorAddressList},
): string => {
  const validator = validators[address];

  if (validator) {
    return validator.moniker;
  }
  return address;
};
