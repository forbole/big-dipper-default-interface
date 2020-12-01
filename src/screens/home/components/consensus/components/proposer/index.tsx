import React from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import { ProposerProps } from './types';
import { useGetStyles } from './styles';

const Proposer = (props:ProposerProps) => {
  const { classes } = useGetStyles();
  const {
    id,
    display,
  } = props;

  const path = 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg';
  return (
    <Link href={`/validators/${id}`}>
      <a className={classnames(classes.root)}>
        <img src={path} alt="" className={classnames('icon')} />
        <div>{display}</div>
      </a>
    </Link>
  );
};

export default Proposer;
