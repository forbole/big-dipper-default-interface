import React from 'react';
import { useTranslation } from 'i18n';
import classnames from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/classnames';
import {
  UserInfoDesktop,
  UserInfoMobile,
} from 'big-dipper-default-ui';
import { useGetStyles } from './styles';
import { dummyData } from './utils';
import { useDetailHook } from './hooks';

const Detail = () => {
  const { t } = useTranslation(['accounts', 'activities']);
  const { classes } = useGetStyles(dummyData);
  const { handleCopy } = useDetailHook(t);

  return (
    <div className={classes.root}>
      <UserInfoMobile
        className={classnames(classes.root)}
        classNameAddress={classnames(classes.address)}
        classNameTable={classnames(classes.table)}
        classNameChart={classnames(classes.chart)}
        {...dummyData}
        copyCallback={handleCopy}
      />
      <UserInfoDesktop
        className={classnames(classes.root)}
        classNameAddress={classnames(classes.address)}
        classNameTable={classnames(classes.table)}
        classNameChart={classnames(classes.chart)}
        {...dummyData}
        copyCallback={handleCopy}
      />
    </div>
  );
};

export default Detail;
