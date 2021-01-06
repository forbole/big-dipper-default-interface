import React from 'react';
import Link from 'next/link';
import { AvatarDisplay } from 'big-dipper-default-ui';
import { ProposerProps } from './types';

const Proposer = (props: ProposerProps) => {
  const {
    id,
    imageUrl,
    display,
    alt,
  } = props;

  return (
    <Link href={`/validators/${id}`}>
      <a>
        <AvatarDisplay
          imageUrl={imageUrl}
          alt={alt}
          title={display}
        />
      </a>

    </Link>
  );
};

export default Proposer;
