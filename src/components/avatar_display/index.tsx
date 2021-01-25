import React, { useContext } from 'react';
import * as R from 'ramda';
import { ValidatorAddressList } from '@models';
import { GlobalContext } from '@contexts';
// import { getAddressRole } from '@utils';
import { AvatarDisplayProps } from './types';
import {
  ValidatorDisplay, UserDisplay,
} from './components';

/**
 * Component that extends AvatarDisplay and uses JazzIcon if user image could not be found
 */
const AvatarDisplayHelper = (props:AvatarDisplayProps) => {
  const {
    address,
    display,
    identity,
  } = props;
  const globalState = useContext(GlobalContext);
  const validators: {[key:string]:ValidatorAddressList} = R.pathOr({
  }, ['validators'], globalState);
  const validator = validators[address];
  if (validator) {
    return (
      <ValidatorDisplay
        address={validator.operatorAddress}
        display={display ?? validator?.moniker}
        identity={identity ?? validator?.id}
      />
    );
  }

  // Edge case in which the validator is created but not logged in to our initial address list
  // if (getAddressRole(address) === 'validator') {
  //   return (
  //     <ValidatorDisplay
  //       address={address}
  //       display={display}
  //       identity={identity}
  //     />
  //   );
  // }

  return (
    <UserDisplay {...props} />
  );
};

export default AvatarDisplayHelper;
