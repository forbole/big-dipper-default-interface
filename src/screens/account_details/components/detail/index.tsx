import React from 'react';
import numeral from 'numeral';
import { useTranslation } from 'i18n';
import classnames from 'classnames';
import { useTheme } from '@material-ui/core/styles';
import {
  UserInfo,
  InfoPopover,
} from '@forbole/big-dipper-default-ui';
import { Avatar } from '@components';
import { chainConfig } from '@src/chain_config';
import { useGetScreenSizeHook } from '@hooks';
import { formatMiddleEllipse } from '@utils';
import { useGetStyles } from './styles';
import { Dialog } from './components';
import { useDetailHook } from './hooks';

const Detail = () => {
  const theme:any = useTheme();
  const { t } = useTranslation('accounts');
  const colors = ['#FD248C', '#1D86FF', '#FFA716', '#1EC490', '#9D2DFF'];
  const { classes } = useGetStyles(colors);
  const {
    handleCopy,
    userInfo,
  } = useDetailHook(t);
  const { isMobile } = useGetScreenSizeHook();
  const denom = chainConfig.display.toUpperCase();

  // ===============================
  // ui utils
  // ===============================
  const formatAddress = (address: string) => {
    if (isMobile) {
      return formatMiddleEllipse(address, {
        beginning: 8,
        ending: 6,
      });
    }
    return address;
  };
  return (
    <UserInfo
      desktop={theme?.breakpoints?.values?.desktop}
      className={classnames(classes.root)}
      addressContent={{
        image: (<Avatar
          address={userInfo.address}
          diameter={40}
        />),
        address: {
          title: t('rewardAddress'),
          display: formatAddress(userInfo.address),
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
                detail={t('rewardAddressInfo')}
              />
            </div>
          ),
          display: formatAddress(userInfo.rewardAddress),
          rawValue: userInfo.rewardAddress,
        },
      }}
      chart={{
        total: {
          title: `${t('total')} ${denom}`,
          subTitle: `$${numeral(userInfo.price).format('0,0.00')} / ${denom}`,
        },
        totalDollar: {
          title: `${userInfo.total.format} ${denom}`,
          subTitle: `$${numeral(userInfo.price * userInfo.total.raw).format('0,0.00')}`,
        },
        colors: ['#FD248C', '#1D86FF', '#FFA716', '#1EC490', '#9D2DFF'],
        data: [
          {
            title: t('available'),
            value: userInfo.available.raw,
            display: `${userInfo.available.format} ${denom}`,
          },
          {
            title: t('delegate'),
            value: userInfo.delegate.raw,
            display: `${userInfo.delegate.format} ${denom}`,
          },
          {
            title: t('unbonding'),
            value: userInfo.unbonding.raw,
            display: `${userInfo.unbonding.format} ${denom}`,
          },
          {
            title: t('reward'),
            value: userInfo.reward.raw,
            display: `${userInfo.reward.format} ${denom}`,
          },
          {
            title: t('commission'),
            value: userInfo.commission.raw,
            display: `${userInfo.commission.format} ${denom}`,
          },
        ],
      }}
      copyCallback={handleCopy}
    />
  );
};

export default Detail;
