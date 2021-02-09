import React from 'react';
import { AvatarDisplay } from '@components';
import moment from 'moment';
import { UserStaking } from '@models';
import {
  formatDenom, formatMiddleEllipse,
} from '@utils';
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
  // const delegationsSummedUp = [];
  // data.delegations.reduce((res, value) => {
  //   if (!res[value.validatorAddress]) {
  //     res[value.validatorAddress] = {
  //       validatorAddress: value.validatorAddress,
  //       validatorMoniker: value.validatorMoniker,
  //       validatorIdenty: value.validatorIdenty,
  //       commission: value.commission,
  //       votingPower: value.votingPower,
  //       amount: value.amount.amount,
  //     };
  //     delegationsSummedUp.push(res[value.validatorAddress]);
  //   }
  //   res[value.validatorAddress].amount += value.amount.amount;
  //   return res;
  // }, {
  // });
  // console.log('delegationsSummedUp', delegationsSummedUp);





  // let list = [];
  // const summedUpDelegations = data.delegations.filter((i) =>
  //   i?.amount?.denom === chainConfig.base).reduce((a, b) => {
  //     return {
  //     list.push({
  //     validatorAddress: b.validatorAddress,
  //     validatorMoniker: b.validatorMoniker,
  //     validatorIdenty: b.validatorIdenty,
  //     amount: {
  //       denom: '',
  //       amount: a.amount.amount + b.amount.amount,
  //     },
  //     commission: b.commission,
  //     votingPower: b.votingPower,
  //   });
      // validatorAddress: 1,
      // validatorMoniker: 1,
      // validatorIdenty: 1,
      // amount: a.amount.amount + b.amount.amount,
      // };
    // });
  // console.log('summedUpDelegations', summedUpDelegations);

  const convertAmount = (amount: number) => `${formatDenom(chainConfig.display, amount, '0.00[0000]').format} ${chainConfig.display.toUpperCase()}`;

  return {
    delegations: data.delegations.map((x) => {
      const reward = data.rewards.filter((i) => i.validatorAddress === x.validatorAddress)
        .reduce((a, b) => {
          return a + b?.amount?.amount;
        }, 0);
      console.log('reward', reward);
      return ({
        validator: {
          rawValue: x.validatorAddress,
          display: (
            <AvatarDisplay
              display={x.validatorMoniker}
              address={x.validatorAddress}
              identity={x.validatorIdenty}
            />),
        },
        delegatedAmount: {
          rawValue: x.amount.amount,
          display: convertAmount(x.amount.amount),
        },
        reward: {
          rawValue: reward,
          display: convertAmount(reward),
        },
        commission: {
          rawValue: x.commission,
          display: numeral(x.commission).format('0.00%'),
        },
        votingPower: {
          rawValue: x.votingPower / data.totalVotingPower,
          display: numeral(x.votingPower / data.totalVotingPower).format('0.00%'),
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
    delegations:
      data.delegations.map((x) => {
        return ({
          address: (
            <AvatarDisplay
              display={x.validatorAddress}
              address={x.validatorAddress}
            />),
          amount: convertAmount(x.amount.amount),
        });
      }),

    redelegations: data.redelegations.map((x) => {
      return ({
        address: (
          <AvatarDisplay
            display={formatAddress(x.delegatorAddress ? x.delegatorAddress : '')}
            address={x.delegatorAddress}
          />),
        redelegate: {
          from: (<AvatarDisplay
            address={x.srcValidatorAddress}
          />),
          to: (<AvatarDisplay
            display={x.dstValidatorAddress}
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
            display={x.validatorAddress}
            address={x.validatorAddress}
          />),
        amount: convertAmount(x.amount.amount),
      });
    }),
  };
};
