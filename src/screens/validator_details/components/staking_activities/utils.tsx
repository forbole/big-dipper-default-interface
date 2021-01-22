import React from 'react';
import { AvatarDisplay } from '@components';
import { ValidatorStaking } from '@models';
import { formatDenom } from '@utils';
import { chainConfig } from '@src/chain_config';

/**
 * Helper function to get mobile labels
 * @param t i18n translator
 */
export const getRedelegationLabels = (t: any) => ({
  from: t('from'),
  redelegateTo: t('redelegateTo'),
  address: t('address'),
  amount: t('amount'),
});

/**
 * Helper function to get delegation and undelegation labels
 * @param t i18n translator
 */
export const getLabels = (t: any) => ({
  address: t('address'),
  amount: t('amount'),
});

/**
 * Helper function to get deskop labels
 * @param t i18n translator
 */
export const getLabelsRedelegationsDesktop = (t: any) => ({
  address: t('address'),
  from: t('from'),
  redelegateTo: t('redelegateTo'),
  amount: t('amount'),
});

export const formatStakingData = (data:ValidatorStaking) => {
  const convertAmount = (amount:number) => `${formatDenom(chainConfig.display, amount, '0.00[0000]').format} ${chainConfig.display.toUpperCase()}`;
  return {
    delegations: data.delegations.map((x) => {
      return ({
        address: <AvatarDisplay address={x.delegatorAddress} />,
        amount: convertAmount(x.amount.amount),
      });
    }),
    undelegations: data.undelegations.map((x) => {
      return ({
        address: <AvatarDisplay address={x.delegatorAddress} />,
        amount: convertAmount(x.amount.amount),
      });
    }),
    redelegations: data.redelegations.map((x) => {
      return ({
        address: <AvatarDisplay address={x.delegatorAddress} />,
        redelegate: {
          from: <AvatarDisplay address={x.srcValidatorAddress} />,
          to: <AvatarDisplay address={x.dstValidatorAddress} />,
        },
        amount: convertAmount(x.amount.amount),
      });
    }),
  };
};
