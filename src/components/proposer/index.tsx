import React from 'react';
import Link from 'next/link';
import { AvatarDisplay } from '@components';
import { ProposerProps } from './types';
import { proposerUtils } from './utils';

const Proposer = (props: ProposerProps) => {
  const {
    id,
    identity,
    display,
  } = props;
  const { handleClick } = proposerUtils();

  return (
    <span onClick={handleClick} role="button">
      <Link href={`/validators/${id}`}>
        <a>
          <AvatarDisplay
            identity={identity}
            display={display}
            address={id}
          />
        </a>
      </Link>
    </span>
  );
};

export default Proposer;
