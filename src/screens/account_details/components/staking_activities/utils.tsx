import React from 'react';
import { AvatarDisplay } from '@components';
import moment from 'moment';
import { UserStaking } from '@models';
import { formatDenom } from '@utils';
import numeral from 'numeral';
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
      label: 'votingPower',
      display: t('votingPower'),
      sort: true,
      align: 'right',
    },
  ]);
};

export const getRedelegationColumns = (t: any) => {
  return ([
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

export const formatStakingDataDesktop = (data: UserStaking) => {
  const convertAmount = (amount: number) => `${formatDenom(chainConfig.display, amount, '0.00[0000]').format} ${chainConfig.display.toUpperCase()}`;
  return {
    delegations: data.delegations.map((x) => {
      return ({
        validator: {
          className: 'delegationsValidator',
          rawValue: x.validatorAddress,
          display: (
            <AvatarDisplay
              address={x.validatorAddress}
            />),
        },
        delegatedAmount: {
          className: 'delegatedAmount',
          rawValue: x.amount,
          display: convertAmount(x.amount),
        },
        reward: {
          className: 'reward',
          rawValue:
           data.rewards.filter((i) => i.validatorAddress === x.validatorAddress)[0]?.amount,
          display:
           convertAmount(data.rewards.filter((i) => i.validatorAddress
           === x.validatorAddress)[0]?.amount),
        },
        commission: {
          className: 'commission',
          rawValue: x.commission,
          display: numeral(x.commission).format('0.00%'),
        },
        votingPower: {
          className: 'votingPower',
          rawValue: data.totalVotingPower && data.totalVotingPower > 0
            ? x.votingPower / data.totalVotingPower : 0,
          display: numeral(data.totalVotingPower && data.totalVotingPower > 0 ? x.votingPower / data.totalVotingPower : 0).format('0.00%'),
        },
      });
    }),
    redelegations: data.redelegations.map((x) => {
      return ({
        srcValidator: {
          className: 'srcValidator',
          rawValue: x.srcValidatorAddress,
          display: (
            <AvatarDisplay
              address={x.srcValidatorAddress}
            />),
        },
        dstValidator: {
          className: 'dstValidator',
          rawValue: x.dstValidatorAddress,
          display: (
            <AvatarDisplay
              address={x.dstValidatorAddress}
            />),
        },
        redelegatedAmount: {
          className: 'redelegatedAmount',
          rawValue: x.amount,
          display: convertAmount(x.amount),
        },
        expectedDelivery: {
          className: 'redelegationsExpectedDelivery',
          rawValue: x.expectedTime,
          display: moment(x.expectedTime).format('DD MMM YYYY, HH:mm'),
        },
      });
    }),
    unbonding: data.unbonding.map((x) => {
      return ({
        validator: {
          className: 'unbondingValidator',
          rawValue: x.validatorAddress,
          display: (
            <AvatarDisplay
              address={x.validatorAddress}
            />),
        },
        unbondedAmount: {
          className: 'unbondedAmount',
          rawValue: x.amount,
          display: convertAmount(x.amount),
        },
        expectedDelivery: {
          className: 'unbondingExpectedDelivery',
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

  return {
    delegations:
      data.delegations.map((x) => {
        return ({
          address: (
            <AvatarDisplay
              address={x.validatorAddress}
            />),
          amount: convertAmount(x.amount),
        });
      }),

    redelegations: data.redelegations.map((x) => {
      return ({
        address: (
          <AvatarDisplay
            address={x.delegatorAddress}
          />),
        redelegate: {
          from: (<AvatarDisplay
            address={x.srcValidatorAddress}
          />),
          to: (<AvatarDisplay
            address={x.dstValidatorAddress}
          />),
        },
        amount: convertAmount(x.amount),
      });
    }),

    unbonding: data.unbonding.map((x) => {
      return ({
        address: (
          <AvatarDisplay
            address={x.validatorAddress}
          />),
        amount: convertAmount(x.amount),
      });
    }),
  };
};
