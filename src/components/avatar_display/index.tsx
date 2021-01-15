import React from 'react';
import { getAddressRole } from '@utils';
import { AvatarDisplayProps } from './types';
import { useAvatarDisplayHook } from './hooks';
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

  const { validator } = useAvatarDisplayHook(address);

  if (getAddressRole(address) === 'validator' || validator) {
    return (
      <ValidatorDisplay
        address={address}
        display={display ?? validator?.moniker}
        identity={identity ?? validator?.id}
      />
    );
  }

  return (
    <UserDisplay {...props} />
  );
};

export default AvatarDisplayHelper;
