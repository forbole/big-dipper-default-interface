import React from 'react';
import { AvatarDisplay } from '@forbole/big-dipper-default-ui';

// =================================
// dummy start
// =================================
const Address = () => {
  return (
    <AvatarDisplay
      imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg"
      alt="avatar image"
      title="Forbole"
    />
  );
};

export const singleMobileDummy = {
  address: <Address />,
  amount: '1,000 ATOM',
};

export const dummyMobileData = new Array(20).fill(singleMobileDummy);

const singleDesktopDelegationData = {
  validator: {
    rawValue: 'forbole',
    display: <Address />,
  },
  delegatedAmount: {
    rawValue: 1000,
    display: '1,000 ATOM',
  },
  amtRatio: {
    rawValue: 77,
    display: '0.77%',
  },
  reward: {
    rawValue: 77,
    display: '0.77%',
  },
  commission: {
    rawValue: 77,
    display: '0.77%',
  },
  vpRatios: {
    rawValue: 77,
    display: '0.77%',
  },
};

export const dummyDesktopDelegation = Array(20).fill(singleDesktopDelegationData);

const singleDesktopRedelegationData = {
  validator: {
    rawValue: 'forbole',
    display: <Address />,
  },
  height: {
    rawValue: 1000,
    display: '1,000',
  },
  redelegatedAmount: {
    rawValue: 77,
    display: '77 DSM',
  },
  remainingAmount: {
    rawValue: 77,
    display: '77 DSM',
  },
  expectedDelivery: {
    rawValue: 77,
    display: '20 Jan 2020, 19:27:20',
  },
};

export const dummyDesktopRedelegation = Array(20).fill(singleDesktopRedelegationData);

const singleDesktopUnbondingData = {
  validator: {
    rawValue: 'forbole',
    display: <Address />,
  },
  height: {
    rawValue: 1000,
    display: '1,000',
  },
  unbondedAmount: {
    rawValue: 77,
    display: '77 DSM',
  },
  remainingAmount: {
    rawValue: 77,
    display: '77 DSM',
  },
  expectedDelivery: {
    rawValue: 77,
    display: '20 Jan 2020, 19:27:20',
  },
};

export const dummyDesktopUnbonding = Array(20).fill(singleDesktopUnbondingData);

// =================================
// dummy end
// =================================

export const getDelegationColumns = (t:any) => {
  return ([
    {
      label: 'validator',
      display: t('validator'),
      sort: true,
    },
    {
      label: 'delegatedAmount',
      display: t('delegatedAmount'),
      sort: true,
      align: 'right',
    },
    {
      label: 'amtRatio',
      display: t('amtRatio'),
      sort: true,
      align: 'right',
    },
    {
      label: 'reward',
      display: t('reward'),
      sort: true,
      align: 'right',
    },
    {
      label: 'commission',
      display: t('commission'),
      sort: true,
      align: 'right',
    },
    {
      label: 'vpRatios',
      display: t('vpRatios'),
      sort: true,
      align: 'right',
    },
  ]);
};

export const getRedelegationColumns = (t:any) => {
  return ([
    {
      label: 'validator',
      display: t('validator'),
      sort: true,
    },
    {
      label: 'height',
      display: t('height'),
      sort: true,
      align: 'right',
    },
    {
      label: 'redelegatedAmount',
      display: t('redelegatedAmount'),
      sort: true,
      align: 'right',
    },
    {
      label: 'remainingAmount',
      display: t('remainingAmount'),
      sort: true,
      align: 'right',
    },
    {
      label: 'expectedDelivery',
      display: t('expectedDelivery'),
      sort: true,
      align: 'right',
    },
  ]);
};

export const getUnbondingColumns = (t:any) => {
  return ([
    {
      label: 'validator',
      display: t('validator'),
      sort: true,
    },
    {
      label: 'height',
      display: t('height'),
      sort: true,
      align: 'right',
    },
    {
      label: 'unbondedAmount',
      display: t('unbondedAmount'),
      sort: true,
      align: 'right',
    },
    {
      label: 'remainingAmount',
      display: t('remainingAmount'),
      sort: true,
      align: 'right',
    },
    {
      label: 'expectedDelivery',
      display: t('expectedDelivery'),
      sort: true,
      align: 'right',
    },
  ]);
};
