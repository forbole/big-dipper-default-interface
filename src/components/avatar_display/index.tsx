import React, { useContext } from 'react';
import { AvatarDisplay } from 'big-dipper-default-ui';
import { GlobalContext } from '@contexts';
import { AvatarDisplayProps } from './types';
import { usdAvatarDisplayHelperHook } from './hooks';

/**
 * Component that extends AvatarDisplay and uses JazzIcon if user image could not be found
 */
const AvatarDisplayHelper = (props:AvatarDisplayProps) => {
  const {
    identity,
    display,
  } = props;
  const globalState = useContext(GlobalContext);
  const { keybaseList } = globalState;
  usdAvatarDisplayHelperHook(identity, globalState);

  console.log(keybaseList, 'woowowow the keybase list');

  if (1 === 0) {
    return (
      // <AvatarDisplay
      //   imageUrl=""
      //   title={display}
      // />
      <div>exist</div>
    );
  }
  return (
    <div>placeholder</div>
    // <AvatarDisplay
    //   imageUrl=""
    //   title={display}
    // />
  );
};

export default AvatarDisplayHelper;
