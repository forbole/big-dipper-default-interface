import React, { useContext } from 'react';
import { AvatarDisplay } from 'big-dipper-default-ui';
import { GlobalContext } from '@contexts';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import { AvatarDisplayProps } from './types';
import { usedAvatarDisplayHelperHook } from './hooks';

/**
 * Component that extends AvatarDisplay and uses JazzIcon if user image could not be found
 */
const AvatarDisplayHelper = (props:AvatarDisplayProps) => {
  const {
    identity,
    display,
  } = props;
  const globalState = useContext(GlobalContext);
  usedAvatarDisplayHelperHook(identity, globalState);
  const { keybaseList } = globalState;

  const verifiedUser = keybaseList[identity];

  if (verifiedUser) {
    return (
      <AvatarDisplay
        imageUrl={verifiedUser.imageUrl}
        title={display}
      />
    );
  }
  return (
    <Jazzicon diameter={48} />
    // <AvatarDisplay
    //   imageUrl=""
    //   title={display}
    // />
  );
};

export default AvatarDisplayHelper;
