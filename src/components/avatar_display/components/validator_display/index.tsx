import React, { useContext } from 'react';
import Link from 'next/link';
import { AvatarDisplay } from 'big-dipper-default-ui';
import Jazzicon from 'react-jazzicon';
import { useKeybaseHook } from '@hooks';
import { GlobalContext } from '@contexts';
import { AvatarDisplayProps } from '../../types';
import {
  handleClick, getSeed,
} from '../../utils';

const ValidatorDisplay = (props: AvatarDisplayProps) => {
  const {
    address,
    identity,
    display,
  } = props;

  const globalState = useContext(GlobalContext);
  useKeybaseHook(identity, globalState);
  const { keybaseList } = globalState;

  const verifiedUser = keybaseList?.[identity];

  return (
    <span onClick={handleClick} role="button">
      <Link href={`/validators/${address}`}>
        <a>
          {verifiedUser ? (
            <AvatarDisplay
              imageUrl={verifiedUser.imageUrl}
              title={display}
            />
          ) : (
            <AvatarDisplay
              avatar={(
                <Jazzicon
                  diameter={24}
                  seed={getSeed(address)}
                />
              )}
              imageUrl=""
              title={display ?? address}
            />
          )}
        </a>
      </Link>
    </span>
  );
};

export default ValidatorDisplay;