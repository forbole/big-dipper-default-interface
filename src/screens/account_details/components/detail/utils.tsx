import React from 'react';
import { AvatarDisplay } from '@forbole/big-dipper-default-ui';

export const toCurrency = (num) => {
  const parts = num.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
};

const ProposerData = () => {
  return (
    <AvatarDisplay
      imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg"
      alt="avatar image"
      title="Forbole"
    />
  );
};

export const delegate = {
  validator: {
    className: 'validator',
    rawValue: 'forbole',
    display: <ProposerData />,
  },
  amount: {
    className: 'amount',
    rawValue: 4602020,
    display: '4,602,020 ATOM',
  },
  ratio: {
    className: 'ratio',
    rawValue: 77,
    display: '0.77%',
  },
  reward: {
    className: 'reward',
    rawValue: 1122.969256,
    display: '1,122.969256 ATOM',
  },
  commission: {
    className: 'commission',
    rawValue: '5',
    display: '5.00%',
  },
  VPRatios: {
    className: 'VPRatios',
    rawValue: 0.18,
    display: '0.18%',
  },
};

export const redelegate = {
  validator: {
    className: 'validator',
    rawValue: 'forbole',
    display: <ProposerData />,
  },
  height: {
    className: 'height',
    rawValue: 1503609,
    display: '1,503,609',
  },
  amount: {
    className: 'redelegatedAmount',
    rawValue: 1602020.799998,
    display: '1,602,020.799998 ATOM',
  },
  expectedDelivery: {
    className: 'expectedDelivery',
    rawValue: '20 Jan 2020, 19:27:20 (In 7 days)',
    display: '20 Jan 2020, 19:27:20 (In 7 days)',
  },
};

export const unbonded = {
  validator: {
    className: 'validator',
    rawValue: 'forbole',
    display: <ProposerData />,
  },
  height: {
    className: 'height',
    rawValue: 2503609,
    display: '2,503,609',
  },
  amount: {
    className: 'amount',
    rawValue: 7202020.799998,
    display: '7,202,020.799998 ATOM',
  },
  expectedDelivery: {
    className: 'expectedDelivery',
    rawValue: '20 Jan 2020, 19:27:20 (In 7 days)',
    display: '20 Jan 2020, 19:27:20 (In 7 days)',
  },
};

export const dummyData: any = {
  tableDefaultProps: {
    delegatdColumns: [
      {
        label: 'validator',
        display: 'Validator',
        sort: true,
      },
      {
        label: 'amount',
        display: 'Delegated Amount',
        align: 'right',
        sort: true,
      },
      {
        label: 'ratio',
        display: 'Amt. Ratio',
        align: 'right',
        sort: true,
      },
      {
        label: 'reward',
        display: 'Reward',
        align: 'right',
        sort: true,
      },
      {
        label: 'commission',
        display: 'Commission',
        align: 'right',
        sort: true,
      },
      {
        label: 'VPRatios',
        display: 'VR Ratio',
        align: 'right',
        sort: true,
      },
    ],
    redelegatedColumns: [
      {
        label: 'validator',
        display: 'Validator',
        sort: true,
      },
      {
        label: 'height',
        display: 'Height',
        sort: true,
      },
      {
        label: 'amount',
        display: 'redelegated Amount',
        align: 'right',
        sort: true,
      },
      {
        label: 'expectedDelivery',
        display: 'Expected Delivery',
        align: 'right',
        sort: true,
      },
    ],
    unbondingColumns: [
      {
        label: 'validator',
        display: 'Validator',
        sort: true,
      },
      {
        label: 'height',
        display: 'Height',
        sort: true,
      },
      {
        label: 'amount',
        display: 'Unbonded Amount',
        align: 'right',
        sort: true,
      },
      {
        label: 'expectedDelivery',
        display: 'Expected Delivery',
        align: 'right',
        sort: true,
      },
    ],
    delegatedData: [
      delegate,
      delegate,
      delegate,
      delegate,
      delegate,
      delegate,
      delegate,
      delegate,
      delegate,
    ],
    redelegatedData: [
      redelegate,
      redelegate,
      redelegate,
      redelegate,
      redelegate,
      redelegate,
      redelegate,
      redelegate,
      redelegate,
      redelegate,
    ],
    unbondingData: [
      unbonded,
      unbonded,
      unbonded,
      unbonded,
      unbonded,
      unbonded,
      unbonded,
      unbonded,
      unbonded,
      unbonded,
      unbonded,
      unbonded,

    ],
  },
};
