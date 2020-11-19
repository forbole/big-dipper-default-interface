import React from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import { useGetStyles } from './styles';

const FooterAction = () => {
  const { t } = useTranslation(['home']);
  const { classes } = useGetStyles();
  return (
    <Link href="/blocks">
      <a>
        <p className={classnames(classes.root)}>{t('seeMore')}</p>
      </a>
    </Link>
  );
};

export default FooterAction;
