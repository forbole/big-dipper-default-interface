import React from 'react';
import { useTranslation } from 'i18n';
import classnames from 'classnames';
import {
  UserInfoDesktop,
  UserInfoMobile,
} from 'big-dipper-default-ui';
// import { useActivitiesHook } from './hooks';
import { useGetStyles } from './styles';
import { dummyData } from './utils';

const Detail = () => {
  // const {
  //   handleOnFilterCallback,
  //   state,
  //   handleLoadMore,
  //   handleClick,
  // } = useActivitiesHook();
  const { t } = useTranslation(['accounts', 'activities']);
  const { classes } = useGetStyles();

  // const {
  //   hasMore,
  //   data,
  // } = state;

  return (
    <div className={classes.root}>
      <UserInfoMobile
        className={classnames(classes.root)}
        {...dummyData}
      />
      <UserInfoDesktop
        className={classnames(classes.root)}
        {...dummyData}
      />
    </div>
  );
};

export default Detail;
