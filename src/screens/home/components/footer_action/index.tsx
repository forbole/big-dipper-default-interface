import React from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import { useGetStyles } from './styles';
import { FooterActionProps } from './types';

const FooterAction = (props:FooterActionProps) => {
  const { t } = useTranslation(['home']);
  const { classes } = useGetStyles();
  const { url } = props;
  return (
    <Link href={url}>
      <a>
        <p className={classnames(classes.root)}>{t('seeMore')}</p>
      </a>
    </Link>
  );
};

export default FooterAction;
