import React from 'react';
import { useTranslation } from 'i18n';
import classnames from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/classnames';
import { useGetStyles } from './styles';
import { TypeTagProps } from './types';

const TypeTag = (props: TypeTagProps) => {
  const { t } = useTranslation(['activities']);

  const {
    type,
    display,
  } = props;

  const { classes } = useGetStyles();

  return (
    <div className={classnames(classes.root, 'type-tag__container')}>
      <div className={classnames('tag', type)}>
        {t(display)}
      </div>
    </div>
  );
};

export default TypeTag;
