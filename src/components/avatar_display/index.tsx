import React, { useContext } from 'react';
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
  const validator = globalState?.validators?.[address];
  if (validator) {
    return (
      <ValidatorDisplay
        address={address}
        display={display ?? validator?.moniker}
        identity={identity ?? validator?.id}
      />
    );
  }

  // Edge case in which the validator is created but not logged in to our initial address list
  // Not sure how to fully handle this atm will come back
  // if (getAddressRole(address) === 'validator') {
  //   return (
  //     <ValidatorDisplay
  //       className={classes.root}
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
