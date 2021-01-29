import React, { useContext } from 'react';
import Link from 'next/link';
import Jazzicon from 'react-jazzicon';
import {
  getSeed, getAddressRole,
} from '@utils';
import { GlobalContext } from '@contexts';
import { Validator } from './components';
import { handleClick } from './utils';
import { AvatarProps } from './types';

/**
 * Helper component built off Avatar component to display jazz icon if user is not validated
 */
export const AvatarHelper = (props:AvatarProps) => {
  const {
    address,
    diameter = 24,
    link = true,
  } = props;

  const globalState = useContext(GlobalContext);
  const validator = globalState?.validators?.[address];

  if (validator) {
    return (
      <Validator
        diameter={diameter}
        address={address}
        identity={validator?.id}
        link={link}
      />
    );
  }

  if (getAddressRole(address) === 'validator') {
    return (
      <Validator
        diameter={diameter}
        address={address}
        link={link}
      />
    );
  }

  if (!link) {
    return (
      <Jazzicon
        diameter={diameter}
        seed={getSeed(address)}
      />
    );
  }

  return (
    <span onClick={handleClick} role="button">
      <Link href={`/accounts/${address}`}>
        <Jazzicon
          diameter={diameter}
          seed={getSeed(address)}
        />
      </Link>
    </span>
  );
};

export default AvatarHelper;
