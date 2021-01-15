import React from 'react';
import Link from 'next/link';
import { AvatarDisplay } from 'big-dipper-default-ui';
import { ProposerProps } from './types';
import { useProposerHook } from '../../hooks';

const Proposer = (props: ProposerProps) => {
  const {
    id,
    imageUrl,
    display,
    alt,
  } = props;

  const { proposer } = useProposerHook();

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
