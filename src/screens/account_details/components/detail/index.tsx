import React from 'react';
import { useTranslation } from 'i18n';
import classnames from 'classnames';
import {
  UserInfoDesktop,
  UserInfoMobile,
} from 'big-dipper-default-ui';
import { useGetStyles } from './styles';
import {
  dummyData,
  toCurrency,
} from './utils';
import { useDetailHook } from './hooks';

const Detail = () => {
  const { t } = useTranslation(['accounts', 'activities']);
  const colors = ['#FD248C', '#1D86FF', '#FFA716', '#1EC490', '#9D2DFF'];
  const { classes } = useGetStyles(colors);
  const {
    handleCopy,
    userInfo,
  } = useDetailHook(t);

  return (
    <div className={classes.root}>
      <UserInfoMobile
        className={classnames(classes.root)}
        classNameAddress={classnames(classes.address)}
        classNameTable={classnames(classes.table)}
        classNameChart={classnames(classes.chart)}
        {...dummyData}
        chart={{
          total: {
            title: `Total ${userInfo.unit}`,
            subTitle: `${toCurrency(userInfo.price)} / ${userInfo.delegate.denom}`,
          },
          totalDollar: {
            title: `${toCurrency(userInfo.totalAmount)}`,
            subTitle: '$21,169,295.52',
          },
          colors: ['#FD248C', '#1D86FF', '#FFA716', '#1EC490', '#9D2DFF'],
          data: [
            {
              title: 'Available',
              value: 111189.15,
              display: '111,189.15 ATOM',
            },
            {
              title: 'Delegate',
              value: userInfo.delegate.amount,
              display: `${toCurrency(userInfo.delegate.amount)} ${userInfo.delegate.denom}`,
            },
            {
              title: 'Unbonding',
              value: userInfo.unbonding.amount,
              display: `${toCurrency(userInfo.unbonding.amount)} ${userInfo.unbonding.denom}`,
            },
            {
              title: 'Reward',
              value: 5122.96,
              display: '5,122.96 ATOM',
            },
            {
              title: 'Commission',
              value: 1324.91,
              display: '1,324.91 ATOM',
            },
          ],

        }}
        copyCallback={handleCopy}
      />
      <UserInfoDesktop
        className={classnames(classes.root)}
        classNameAddress={classnames(classes.address)}
        classNameTable={classnames(classes.table)}
        classNameChart={classnames(classes.chart)}
        {...dummyData}
        chart={{
          total: {
            title: `Total ${userInfo.unit}`,
            subTitle: `${toCurrency(userInfo.price)} / ${userInfo.delegate.denom}`,
          },
          totalDollar: {
            title: `${toCurrency(userInfo.totalAmount)}`,
            subTitle: '$21,169,295.52',
          },
          colors: ['#FD248C', '#1D86FF', '#FFA716', '#1EC490', '#9D2DFF'],
          data: [
            {
              title: 'Available',
              value: 111189.15,
              display: '111,189.15 ATOM',
            },
            {
              title: 'Delegate',
              value: userInfo.delegate.amount,
              display: `${toCurrency(userInfo.delegate.amount)} ${userInfo.delegate.denom}`,
            },
            {
              title: 'Unbonding',
              value: userInfo.unbonding.amount,
              display: `${toCurrency(userInfo.unbonding.amount)} ${userInfo.unbonding.denom}`,
            },
            {
              title: 'Reward',
              value: 5122.96,
              display: '5,122.96 ATOM',
            },
            {
              title: 'Commission',
              value: 1324.91,
              display: '1,324.91 ATOM',
            },
          ],
        }}
        copyCallback={handleCopy}
      />
    </div>
  );
};

export default Detail;
