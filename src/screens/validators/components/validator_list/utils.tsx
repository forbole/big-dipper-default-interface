import React from 'react';
import { ValidatorList } from '@models';

export const parseValidators = (data: {
  validators: ValidatorList[];
  bonded: number;
  signedBlockWindow: number;
}) => {
  const active = [];
  const inactive = [];

  const activeStatus = [2, 3];
  const inactiveStatus = [0, 1];

  data.validators.forEach((x) => {
    // active
    if (active.includes(x.status.status)) {
      active.push({
        moniker: {
          rawValue: x.moniker,
          display: x.moniker,
        },
      });
    }
  });
};
export const dummyActiveMobileData = Array(10).fill({
  moniker: {
    rawValue: 'Forbole',
    imageUrl: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
    display: 'Forbole',
  },
  operatorAddress: '3s12',
  commission: {
    rawValue: 90,
    display: '90%',
  },
  self: {
    rawValue: 11,
    display: '11%',
  },
  votingPower: {
    rawValue: 10,
    display: '10',
    percentDisplay: '45%',
  },
  status: {
    rawValue: 'active',
    className: 'active',
    display: 'active',
  },
});

export const dummyActiveDesktopData = Array(10).fill({
  operatorAddress: 'forbole12345',
  moniker: {
    rawValue: 'forbole',
    display: <div>forbole</div>,
  },
  self: {
    rawValue: 100,
    display: '100%',
  },
  status: {
    className: 'jailed',
    rawValue: 'jailed',
    display: 'jailed',
  },
  commission: {
    rawValue: 100,
    display: '100',
  },
  votingPower: {
    rawValue: 100,
    display: '100',
    percentDisplay: '100%',
  },
  condition: {
    rawValue: 'healthy',
    className: 'healthy',
  },
});

export const dummyInactiveMobileData = Array(10).fill({
  moniker: {
    rawValue: 'Forbole',
    imageUrl: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
    display: 'forbole',
  },
  operatorAddress: '31afsdff2',
  self: {
    rawValue: 10,
    display: '10%',
  },
  votingPower: {
    rawValue: 1000,
    display: '110',
    percentDisplay: '106%',
  },
  status: {
    rawValue: 'active',
    className: 'active',
    display: 'active',
  },
});

export const dummyInactiveDesktopData = Array(10).fill({
  moniker: {
    rawValue: 'Forbole',
    display: <div>Forbole</div>,
  },
  operatorAddress: '31afsdff2',
  self: {
    rawValue: 10,
    display: '10%',
  },
  votingPower: {
    rawValue: 1000,
    display: '110',
    percentDisplay: '106%',
  },
  status: {
    rawValue: 'active',
    className: 'active',
    display: 'active',
  },
  condition: {
    rawValue: 'healthy',
    className: 'healthy',
  },
});

export const getLabels = (t:any) => {
  return {
    moniker: t('moniker'),
    votingPower: t('votingPower'),
    self: t('self'),
    commission: t('commission'),
    status: t('status'),
    condition: {
      display: t('condition'),
      description: t('conditionDescription'),
    },
  };
};
