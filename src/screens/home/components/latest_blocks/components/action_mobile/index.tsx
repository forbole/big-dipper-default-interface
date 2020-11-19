import React from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import { NavigateNext } from '@material-ui/icons';
import { useGetStyles } from './styles';

const ActionMobile = () => {
  const { classes } = useGetStyles();
  return (
    <Link href="/blocks">
      <a>
        <NavigateNext className={classnames(classes.root)} />
      </a>
    </Link>
  );
};

export default ActionMobile;
