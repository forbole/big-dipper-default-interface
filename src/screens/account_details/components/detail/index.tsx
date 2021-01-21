import React from 'react';
import { useTranslation } from 'i18n';
import classnames from 'classnames';
import {
  UserInfoDesktop,
  UserInfoMobile,
} from 'big-dipper-default-ui';
import QRCode from 'qrcode.react';
// import { useActivitiesHook } from './hooks';
import { useGetStyles } from './styles';
import { dummyData } from './utils';

export const QRcode = () => {
  return (
    <QRCode
      value="http://picturesofpeoplescanningqrcodes.tumblr.com/"
      size={128}
      bgColor="#ffffff"
      fgColor="#000000"
      level="L"
      includeMargin={false}
      renderAs="svg"
    />
  );
};

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
