import React from 'react';
import Link from 'next/link';
import { AvatarDisplay } from 'big-dipper-default-ui';
import Jazzicon from 'react-jazzicon';
import { getSeed } from '@utils';
import { AvatarDisplayProps } from '../../types';
import { handleClick } from '../../utils';

const UserDisplay = (props: AvatarDisplayProps) => {
  const {
    address,
    display,
    className,
  } = props;

  return (
    <span onClick={handleClick} role="button" className={className}>
      <Link href={`/accounts/${address}`}>
        <a>
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
        </a>
      </Link>
    </span>
  );
};

export default UserDisplay;
