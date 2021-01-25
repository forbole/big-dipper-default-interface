import React, { useContext } from 'react';
import * as R from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/ramda';
import { ValidatorAddressList } from '@models';
import Link from 'next/link';
import { GlobalContext } from '@contexts';
import { getAddressRole } from '@utils';
import { AddressDisplayProps } from './types';
import { handleClick } from './utils';

/**
 * Previously a helper function turned component
 * due to returning jsx usage
 */
const AddressDisplay = (props: AddressDisplayProps) => {
  const {
    address,
    display,
    link = true,
  } = props;
  const globalState = useContext(GlobalContext);
  const validators: {[key:string]:ValidatorAddressList} = R.pathOr({
  }, ['validators'], globalState);

  const validator = validators[address];

  if (validator) {
    if (link) {
      return (
        <Link href={`/validators/${address}`}>
          <a onClick={handleClick} role="button">
            {validator.moniker ?? display ?? address}
          </a>
        </Link>
      );
    }
    return (
      <>
        {validator.moniker ?? address}
      </>
    );
  }

  // Edge case in which the validator is created but not logged in to our initial address list
  if (getAddressRole(address) === 'validator') {
    if (link) {
      return (
        <Link href={`/validators/${address}`}>
          <a onClick={handleClick} role="button">
            {display ?? address}
          </a>
        </Link>
      );
    }
    return (
      <>
        {display ?? address}
      </>
    );
  }

  if (link) {
    return (
      <Link href={`/accounts/${address}`}>
        <a onClick={handleClick} role="button">
          {address}
        </a>
      </Link>
    );
  }

  return <>{address}</>;
};

export default AddressDisplay;
