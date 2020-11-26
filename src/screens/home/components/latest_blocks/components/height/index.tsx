import React from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import { useGetStyles } from './styles';
import { HeightProps } from './types';

const Height = (props:HeightProps) => {
  const { classes } = useGetStyles();
  const {
    raw,
    display = '-',
  } = props;

  const test = (e:any) => {
    console.log('i got clicked');
    e.stopPropagation();
  };
  return (
    <span onClick={test} role="button">
      <Link href={`/blocks/${raw}`}>
        <a>
          <p className={classnames(classes.root)}>{display}</p>
        </a>
      </Link>
    </span>
  );
};

export default Height;
