import React from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import { useGetStyles } from './styles';
import { HeightProps } from './types';

const BlockHeight = (props:HeightProps) => {
  const { classes } = useGetStyles();
  const {
    raw,
    display = '-',
  } = props;

  return (
    <Link href={`/blocks/${raw}`}>
      <a>
        <p className={classnames(classes.root)}>{display}</p>
      </a>
    </Link>
  );
};

export default BlockHeight;
