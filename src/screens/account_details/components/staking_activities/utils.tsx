import React from 'react';
import { AvatarDisplay } from '@components';
import moment from 'moment';
import { UserStaking } from '@models';
import {
  formatDenom, formatMiddleEllipse, convertNumber,
} from '@utils';
import { chainConfig } from '@src/chain_config';

export const getDelegationColumns = (t: any) => {
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

export const getRedelegationColumns = (t: any) => {
  return ([
    {
      label: 'height',
      display: t('height'),
      sort: true,
      align: 'right',
    },
    {
      label: 'srcValidator',
      display: t('srcValidator'),
      sort: true,
    },
    {
      label: 'dstValidator',
      display: t('dstValidator'),
      sort: true,
    },

    {
      label: 'redelegatedAmount',
      display: t('redelegatedAmount'),
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

export const getUnbondingColumns = (t: any) => {
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
      label: 'expectedDelivery',
      display: t('expectedDelivery'),
      sort: true,
      align: 'right',
    },
  ]);
};

export const formatStakingDataDesktop = (
  data: UserStaking, totalVotingPower: number,
) => {
  const convertAmount = (amount: number) => `${formatDenom(chainConfig.display, amount, '0.00[0000]').format} ${chainConfig.display.toUpperCase()}`;
  const convertRatio = (amount: number) => `${amount ? Math.round((amount * 100) * 100) / 100 : 0} %`;

  return {
    delegations: data.delegations.map((x) => {
      return ({
        validator: {
          rawValue: x.validatorAddress,
          display: (
            <AvatarDisplay
              display={x.validatorAddress}
              address={x.validatorAddress}
            />),
        },
        delegatedAmount: {
          rawValue: x.amount.amount,
          display: convertAmount(x.amount.amount),
        },
        amtRatio: {
          rawValue: x.selfDelegatedAmount.amount / x.amount.amount,
          display: convertRatio(x.selfDelegatedAmount.amount / x.amount.amount),
        },
        reward: {
          rawValue: x.reward.amount,
          display: convertAmount(x.reward.amount),
        },
        commission: {
          rawValue: x.comission,
          display: convertRatio(x.comission),
        },
        vpRatios: {
          rawValue: x.votingPower / totalVotingPower,
          display: convertRatio(x.votingPower / totalVotingPower),
        },
      });
    }),
    redelegations: data.redelegations.map((x) => {
      return ({
        srcValidator: {
          rawValue: x.srcValidatorAddress,
          display: (
            <AvatarDisplay
              display={x.srcValidatorAddress}
              address={x.srcValidatorAddress}
            />),
        },
        dstValidator: {
          rawValue: x.dstValidatorAddress,
          display: (
            <AvatarDisplay
              display={x.dstValidatorAddress}
              address={x.dstValidatorAddress}
            />),
        },
        height: {
          rawValue: x.height,
          display: convertNumber(x.height).display,
        },
        redelegatedAmount: {
          rawValue: x.amount.amount,
          display: convertAmount(x.amount.amount),
        },
        expectedDelivery: {
          rawValue: x.expectedTime,
          display: moment(x.expectedTime).format('DD MMM YYYY, HH:mm'),
        },
      });
    }),
    unbonding: data.unbonding.map((x) => {
      return ({
        validator: {
          rawValue: x.validatorAddress,
          display: (
            <AvatarDisplay
              display={x.validatorAddress}
              address={x.validatorAddress}
            />),
        },
        height: {
          rawValue: x.height,
          display: convertNumber(x.height).display,
        },
        unbondedAmount: {
          rawValue: x.amount.amount,
          display: convertAmount(x.amount.amount),
        },
        expectedDelivery: {
          rawValue: x.expectedTime,
          display: moment(x.expectedTime).format('DD MMM YYYY, HH:mm'),
        },
      });
    }),
  };
};

export const formatStakingDataMobile = (
  data: UserStaking,
) => {
  const convertAmount = (amount: number) => `${formatDenom(chainConfig.display, amount, '0.00[0000]').format} ${chainConfig.display.toUpperCase()}`;
  const formatAddress = (address: string) => {
    return formatMiddleEllipse(address, {
      beginning: 3,
      ending: 5,
    });
  };

  return {

    delegations: data.delegations.map((x) => {
      return ({
        address: (
          <AvatarDisplay
            display={formatAddress(x.validatorAddress)}
            address={x.validatorAddress}
          />),
        amount: convertAmount(x.amount.amount),
      });
    }),

    redelegations: data.redelegations.map((x) => {
      return ({
        address: (
          <AvatarDisplay
            display={formatAddress(x.delegatorAddress)}
            address={x.delegatorAddress}
          />),
        redelegate: {
          from: (<AvatarDisplay
            display={formatAddress(x.srcValidatorAddress)}
            address={x.srcValidatorAddress}
          />),
          to: (<AvatarDisplay
            display={formatAddress(x.dstValidatorAddress)}
            address={x.dstValidatorAddress}
          />),
        },
        amount: convertAmount(x.amount.amount),
      });
    }),

    unbonding: data.unbonding.map((x) => {
      return ({
        address: (
          <AvatarDisplay
            display={formatAddress(x.validatorAddress)}
            address={x.validatorAddress}
          />),
        amount: convertAmount(x.amount.amount),
      });
    }),
  };
};
