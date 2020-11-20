import React from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import { useGetStyles } from './styles';
import { ProposerProps } from './types';

const Proposer = (props:ProposerProps) => {
  const { classes } = useGetStyles();
  const {
    id,
    display,
  } = props;
  return (
    <Link href={`/validators/${id}`}>
      <a>
        <p className={classnames(classes.root)}>{display}</p>
      </a>
    </Link>
  );
};

export default Proposer;
