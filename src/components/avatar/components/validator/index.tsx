import React, { useContext } from 'react';
import Link from 'next/link';
import { Avatar } from '@forbole/big-dipper-default-ui';
import Jazzicon from 'react-jazzicon';
import { useKeybaseHook } from '@hooks';
import { GlobalContext } from '@contexts';
import { getSeed } from '@utils';
import { handleClick } from '../../utils';
import { ValidatorProps } from './types';

const Validator = (props: ValidatorProps) => {
  const {
    address,
    diameter,
    identity,
    link,
  } = props;

  const globalState = useContext(GlobalContext);
  useKeybaseHook(identity, globalState);
  const { keybaseList } = globalState;
  const verifiedUser = keybaseList?.[identity];

  if (!link) {
    return (
      <>
        {verifiedUser ? (
          <Avatar
            imageUrl={verifiedUser.imageUrl}
          />
        ) : (
          <Jazzicon
            diameter={diameter}
            seed={getSeed(address)}
          />
        )}
      </>
    );
  }

  return (
    <span onClick={handleClick} role="button">
      <Link href={`/validators/${address}`}>
        <a>
          {verifiedUser ? (
            <Avatar
              imageUrl={verifiedUser.imageUrl}
            />
          ) : (
            <Jazzicon
              diameter={diameter}
              seed={getSeed(address)}
            />
          )}
        </a>
      </Link>
    </span>
  );
};

export default Validator;
