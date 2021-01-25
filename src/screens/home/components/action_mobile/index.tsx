import React from 'react';
import classnames from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/classnames';
import Link from 'next/link';
import { NavigateNext } from '@material-ui/icons';
import { useGetStyles } from './styles';
import { ActionMobileProps } from './types';

const ActionMobile = (props:ActionMobileProps) => {
  const { url } = props;
  const { classes } = useGetStyles();
  return (
    <Link href={url}>
      <a>
        <NavigateNext className={classnames(classes.root)} />
      </a>
    </Link>
  );
};

export default ActionMobile;
