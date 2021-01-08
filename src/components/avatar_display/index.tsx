import React, { useContext } from 'react';
import { AvatarDisplay } from 'big-dipper-default-ui';
import { GlobalContext } from '@contexts';
import Jazzicon from 'react-jazzicon';
import { useKeybaseHook } from '@hooks';
import { AvatarDisplayProps } from './types';

/**
 * Component that extends AvatarDisplay and uses JazzIcon if user image could not be found
 */
const AvatarDisplayHelper = (props:AvatarDisplayProps) => {
  const {
    identity,
    display,
    address,
  } = props;
  const globalState = useContext(GlobalContext);
  useKeybaseHook(identity, globalState);
  const { keybaseList } = globalState;

  const verifiedUser = keybaseList?.[identity];

  if (verifiedUser) {
    return (
      <AvatarDisplay
        imageUrl={verifiedUser.imageUrl}
        title={display}
      />
    );
  }

  const seed = address.split('').reduce((a, b) => {
    return a + b.charCodeAt(0);
  }, 0);

  return (
    <AvatarDisplay
      avatar={(
        <Jazzicon
          diameter={24}
          seed={seed}
        />
)}
      imageUrl=""
      title={display}
    />
  );
};

export default AvatarDisplayHelper;
