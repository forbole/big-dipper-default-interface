import React, { useContext } from 'react';
import * as R from 'ramda';
import { ValidatorAddressList } from '@models';
import Link from 'next/link';
import { GlobalContext } from '@contexts';
import { AddressDisplayProps } from './types';
import { handleClick } from './utils';

/**
 * Previously a helper function turned component
 * due to returning jsx usage
 */
const AddressDisplay = (props: AddressDisplayProps) => {
  const {
    address,
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
            {validator.moniker ?? address}
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
