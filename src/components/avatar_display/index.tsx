import React, { useContext } from 'react';
import { GlobalContext } from '@contexts';
import { AvatarDisplayProps } from './types';
import { useGetStyles } from './styles';
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
  const { classes } = useGetStyles();
  if (validator) {
    return (
      <ValidatorDisplay
        className={classes.root}
        address={address}
        display={display ?? validator?.moniker}
        identity={identity ?? validator?.id}
      />
    );
  }

  return (
    <UserDisplay {...props} className={classes.root} />
  );
};

export default AvatarDisplayHelper;
