import React from 'react';
import { useTranslation } from 'i18n';
import classnames from 'classnames';
import {
  UserInfoDesktop,
  UserInfoMobile,
  AvatarDisplay,
  InfoPopover,
} from '@forbole/big-dipper-default-ui';
import { Avatar } from '@components';
import { useGetStyles } from './styles';
import {
  dummyData,
  toCurrency,
} from './utils';
import { Dialog } from './components';
import { useDetailHook } from './hooks';


const Detail = () => {
  const { t } = useTranslation(['accounts', 'activities']);
  const colors = ['#FD248C', '#1D86FF', '#FFA716', '#1EC490', '#9D2DFF'];
  const { classes } = useGetStyles(colors);
  const {
    handleCopy,
    userInfo,
  } = useDetailHook(t);

  const totalAmount = userInfo.avaliable.amount
  + userInfo.delegate.amount
  + userInfo.unbonding.amount
  + userInfo.reward.amount
  + userInfo.commission.amount;

  return (
    <div className={classes.root}>

      <UserInfoMobile
        className={classnames(classes.root)}
        classNameAddress={classnames(classes.address)}
        classNameTable={classnames(classes.table)}
        classNameChart={classnames(classes.chart)}
        {...dummyData}
        title={t('accountDetails')}
        addressContent={{
          image: (<Avatar
            address={userInfo.address ? userInfo.address : ''}
            diameter={60}

          />),
          address: {
            title: t('rewardAddress'),
            display: userInfo.address,
            dialog: (
              <Dialog
                address={{
                  display: userInfo.address,
                  rawValue: userInfo.address,
                }}
              />
            ),
            rawValue: userInfo.address,
          },
          rewardAddress: {
            title: (
              <div className="rewardAddress">
                {t('rewardAddress')}
                <InfoPopover
                  detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu tristique lorem, id commodo lectus. In faucibus sem eu tellus gravida, id blandit ex tincidunt. Nam tincidunt dolor eros, eget porttitor metus co"
                />
              </div>
            ),
            display: userInfo.rewardAddress,
            rawValue: '123',
          },
        }}
        chart={{
          total: {
            title: `Total ${t('unit')}`,
            subTitle: `${toCurrency(userInfo.price) === '0' ? '0.00' : toCurrency(userInfo.price)} / ${t('unit')}`,
          },
          totalDollar: {
            title: `${toCurrency(totalAmount)}`,
            subTitle: '$0',
          },
          colors: ['#FD248C', '#1D86FF', '#FFA716', '#1EC490', '#9D2DFF'],
          data: [
            {
              title: 'Available',
              value: userInfo.avaliable.amount,
              display: `${toCurrency(userInfo.avaliable.amount)} ${t('unit')}`,
            },
            {
              title: 'Delegate',
              value: userInfo.delegate.amount,
              display: `${toCurrency(userInfo.delegate.amount)} ${t('unit')}`,
            },
            {
              title: 'Unbonding',
              value: userInfo.unbonding.amount,
              display: `${toCurrency(userInfo.unbonding.amount)} ${t('unit')}`,
            },
            {
              title: 'Reward',
              value: userInfo.reward.amount,
              display: `${toCurrency(userInfo.reward.amount)} ${t('unit')}`,
            },
            {
              title: 'Commission',
              value: userInfo.commission.amount,
              display: `${toCurrency(userInfo.commission.amount)} ${t('unit')}`,
            },
          ],

        }}
        copyCallback={handleCopy}
        tabProps={{
          delegations: t('delegations'),
          redelegations: t('redelegations'),
          unbondings: t('unbondings'),
        }}
      />
      <UserInfoDesktop
        className={classnames(classes.root)}
        classNameAddress={classnames(classes.address)}
        classNameTable={classnames(classes.table)}
        classNameChart={classnames(classes.chart)}
        {...dummyData}
        addressContent={{
          image: (<Avatar
            address={userInfo.address ? userInfo.address : ''}
            diameter={40}
          />),
          address: {
            title: t('address'),
            display: userInfo.address,
            dialog: (
              <Dialog
                address={{
                  display: userInfo.address,
                  rawValue: userInfo.address,
                }}
              />
            ),
            rawValue: userInfo.address,
          },
          rewardAddress: {
            title: (
              <div className="rewardAddress">
                {t('rewardAddress')}
                <InfoPopover
                  detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu tristique lorem, id commodo lectus. In faucibus sem eu tellus gravida, id blandit ex tincidunt. Nam tincidunt dolor eros, eget porttitor metus co"
                />
              </div>
            ),
            display: userInfo.rewardAddress,
            rawValue: '123',
          },
        }}
        chart={{
          total: {
            title: `Total ${t('unit')}`,
            subTitle: `${toCurrency(userInfo.price) === '0' ? '0.00' : toCurrency(userInfo.price)} / ${t('unit')}`,
          },
          totalDollar: {
            title: `${toCurrency(totalAmount)}`,
            subTitle: '$0',
          },
          colors: ['#FD248C', '#1D86FF', '#FFA716', '#1EC490', '#9D2DFF'],
          data: [
            {
              title: 'Available',
              value: userInfo.avaliable.amount,
              display: `${toCurrency(userInfo.avaliable.amount)} ${t('unit')}`,
            },
            {
              title: 'Delegate',
              value: userInfo.delegate.amount,
              display: `${toCurrency(userInfo.delegate.amount)} ${t('unit')}`,
            },
            {
              title: 'Unbonding',
              value: userInfo.unbonding.amount,
              display: `${toCurrency(userInfo.unbonding.amount)} ${t('unit')}`,
            },
            {
              title: 'Reward',
              value: userInfo.reward.amount,
              display: `${toCurrency(userInfo.reward.amount)} ${t('unit')}`,
            },
            {
              title: 'Commission',
              value: userInfo.commission.amount,
              display: `${toCurrency(userInfo.commission.amount)} ${t('unit')}`,
            },
          ],
        }}
        copyCallback={handleCopy}
        tabProps={{
          delegations: t('delegations'),
          redelegations: t('redelegations'),
          unbondings: t('unbondings'),
        }}
      />
    </div>
  );
};

export default Detail;
