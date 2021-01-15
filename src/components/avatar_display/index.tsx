import React from 'react';
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
    address, identity,
  } = props;

  const { validator } = useAvatarDisplayHook(address);

  if (identity || validator) {
    return (
      <ValidatorDisplay {...props} {...validator} />
    );
  }

  return (
    <UserDisplay {...props} />
  );
};

export default AvatarDisplayHelper;
