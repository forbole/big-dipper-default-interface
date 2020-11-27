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

  const path = '/images/icons/favicon-16x16.png';
  return (
    <Link href={`/validators/${id}`}>
      <a className={classnames(classes.root)}>
        <img src={path} alt="" className={classnames('icon')} />
        <div className={classnames(classes.root)}>{display}</div>
      </a>
    </Link>
  );
};

export default Proposer;
