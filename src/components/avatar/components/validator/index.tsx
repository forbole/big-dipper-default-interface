import React, { useContext } from 'react';
import Link from 'next/link';
import { Avatar } from 'big-dipper-default-ui';
import Jazzicon from 'react-jazzicon';
import { useKeybaseHook } from '@hooks';
import { GlobalContext } from '@contexts';
import { getSeed } from '@utils';
import { handleClick } from '../../utils';
import { ValidatorProps } from './types';

const Validator = (props: ValidatorProps) => {
  const {
    address,
    identity,
  } = props;
  const globalState = useContext(GlobalContext);
  useKeybaseHook(identity, globalState);
  const { keybaseList } = globalState;
  const verifiedUser = keybaseList?.[identity];

  return (
    <span onClick={handleClick} role="button">
      <Link href={`/validators/${address}`}>
        {verifiedUser ? (
          <Avatar
            imageUrl={verifiedUser.imageUrl}
          />
        ) : (
          <Jazzicon
            diameter={24}
            seed={getSeed(address)}
          />
        )}
      </Link>
    </span>
  );
};

export default Validator;
