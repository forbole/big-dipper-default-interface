import React from 'react';
import Link from 'next/link';
import { AvatarDisplay } from 'big-dipper-default-ui';
import Jazzicon from 'react-jazzicon';
import { AvatarDisplayProps } from '../../types';
import {
  handleClick, getSeed,
} from '../../utils';

const UserDisplay = (props: AvatarDisplayProps) => {
  const { address } = props;

  return (
    <span onClick={handleClick} role="button">
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
            title={address}
          />
        </a>
      </Link>
    </span>
  );
};

export default UserDisplay;
