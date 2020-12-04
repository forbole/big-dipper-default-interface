import React from 'react';
import Link from 'next/link';
import { AvatarDisplay } from 'big-dipper-default-ui';
import { ProposerProps } from './types';
import { proposerUtils } from './utils';

const Proposer = (props: ProposerProps) => {
  const {
    id,
    display,
    imageUrl,
  } = props;
  const { handleClick } = proposerUtils();

  return (
    <span onClick={handleClick} role="button">
      <Link href={`/validators/${id}`}>
        <a>
          <AvatarDisplay
            imageUrl={imageUrl}
            title={display}
          />
        </a>
      </Link>
    </span>
  );
};

export default Proposer;
