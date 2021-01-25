import React from 'react';
import classnames from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/classnames';
import Link from 'next/link';
import { useTranslation } from 'i18n';
import { Button } from '@material-ui/core';
import { useGetStyles } from './styles';
import { ActionDesktopProps } from './types';

const ActionDesktop = (props:ActionDesktopProps) => {
  const { classes } = useGetStyles();
  const { t } = useTranslation(['home']);
  const { url } = props;
  return (
    <Link href={url}>
      <a>
        <Button
          className={classnames(classes.root)}
          color="primary"
          variant="contained"
        >
          {t('seeMore')}
        </Button>
      </a>
    </Link>
  );
};

export default ActionDesktop;
