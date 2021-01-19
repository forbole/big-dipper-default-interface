import React, { useContext } from 'react';
import Link from 'next/link';
import Jazzicon from 'react-jazzicon';
import {
  getSeed, getAddressRole,
} from '@utils';
import { GlobalContext } from '@contexts';
import { Validator } from './components';
import { handleClick } from './utils';

/**
 * Helper component built off Avatar component to display jazz icon if user is not validated
 */
export const AvatarHelper = (props:any) => {
  const { address } = props;

  const globalState = useContext(GlobalContext);
  const validator = globalState?.validators?.[address];

  if (validator) {
    return (
      <Validator
        address={address}
        identity={validator?.identity}
      />
    );
  }

  if (getAddressRole(address) === 'validator') {
    return (
      <Validator
        address={address}
      />
    );
  }

  return (
    <span onClick={handleClick} role="button">
      <Link href={`/accounts/${address}`}>
        <Jazzicon
          diameter={24}
          seed={getSeed(address)}
        />
      </Link>
    </span>
  );
};

export default AvatarHelper;
