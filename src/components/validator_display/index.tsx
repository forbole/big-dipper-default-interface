import React from 'react';
import Link from 'next/link';
import { AvatarDisplay } from '@components';
import { ValidatorDisplayProps } from './types';
import { validatorDisplayUtils } from './utils';

const ValidatorDisplay = (props: ValidatorDisplayProps) => {
  const {
    address,
    identity,
    display,
  } = props;
  const { handleClick } = validatorDisplayUtils();

  return (
    <span onClick={handleClick} role="button">
      <Link href={`/validators/${address}`}>
        <a>
          <AvatarDisplay
            identity={identity}
            display={display}
            address={address}
          />
        </a>
      </Link>
    </span>
  );
};

export default ValidatorDisplay;
