import React from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import { useTranslation } from 'i18n';
import { Button } from '@material-ui/core';
import { useGetStyles } from './styles';

const ActionDesktop = () => {
  const { classes } = useGetStyles();
  const { t } = useTranslation(['home']);
  return (
    <Link href="/blocks">
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
