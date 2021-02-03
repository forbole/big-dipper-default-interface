import React from 'react';
import { useTranslation } from 'i18n';
import classnames from 'classnames';
import { useTheme } from '@material-ui/core/styles';
import { useGetScreenSizeHook } from '@hooks';
import {
  UserInfo,
  // InfoPopover,
} from '@forbole/big-dipper-default-ui';
import { Avatar } from '@components';
// import { chainConfig } from '@src/chain_config';
import { useGetStyles } from './styles';
// import { Dialog } from './components';
import { useDetailHook } from './hooks';

const Detail = () => {
  const theme:any = useTheme();
  const { t } = useTranslation('accounts');
  const colors = ['#FD248C', '#1D86FF', '#FFA716', '#1EC490', '#9D2DFF'];
  const { classes } = useGetStyles(colors);
  const { isDesktop } = useGetScreenSizeHook();
  const {
    handleCopy,
    // userInfo,
  } = useDetailHook(t);

  // const totalAmount = userInfo.avaliable.amount
  // + userInfo.delegate.amount
  // + userInfo.unbonding.amount
  // + userInfo.reward.amount
  // + userInfo.commission.amount;

  // const unit = chainConfig.display.toUpperCase();

  return (
    <div className={classes.root}>
      <UserInfo
        desktop={theme?.breakpoints?.values?.desktop}
        className={classnames(classes.root)}
        title={t('accountDetails')}
        addressContent={{
          image: (<Avatar
            address="cosmos14kn0k…swhp"
            diameter={50}
          />),
          address: {
            title: 'Address',
            display: 'cosmos14kn0k…swhp',
            rawValue: 'cosmos14kn0k…swhp',
          },
          rewardAddress: {
            title: 'Reward Address',
            display: 'cosmos14kn0k…swhp',
            rawValue: 'cosmos14kn0k…swhp',
          },
        }}
        // addressContent={{
          // image: (<Avatar
          //   address={userInfo.address ? userInfo.address : ''}
          //   diameter={60}

          // />),
        //   address: {
        //     title: t('rewardAddress'),
        //     display: userInfo.address,
        //     dialog: (
        //       <Dialog
        //         address={{
        //           display: userInfo.address,
        //           rawValue: userInfo.address,
        //         }}
        //       />
        //     ),
        //     rawValue: userInfo.address,
        //   },
        //   rewardAddress: {
        //     title: (
        //       <div className="rewardAddress">
        //         {t('rewardAddress')}
        //         <InfoPopover
        //           detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu tristique lorem, id commodo lectus. In faucibus sem eu tellus gravida, id blandit ex tincidunt. Nam tincidunt dolor eros, eget porttitor metus co"
        //         />
        //       </div>
        //     ),
        //     display: userInfo.rewardAddress,
        //     rawValue: '123',
        //   },
        // }}
        chart={{
          total: {
            title: 'Total ATOM',
            subTitle: '$3.22/ATOM',
          },
          totalDollar: {
            title: '6,574,315.38',
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
              value: 458003.25,
              display: '6,458,003.25 ATOM',
            },
            {
              title: 'Unbonding',
              value: 156.00,
              display: '156.00 ATOM',
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
