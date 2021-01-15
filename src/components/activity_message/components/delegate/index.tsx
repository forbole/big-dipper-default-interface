import React from 'react';
import classnames from 'classnames';
import { AvatarDisplay } from '@components';
import { useTranslation } from 'i18n';
import { useGetStyles } from './styles';

const Delegate = (props:any) => {
  const { t } = useTranslation(['activities']);
  const { className } = props;
  const { classes } = useGetStyles();
  // fake
  const message = {
    delegatorAddress: 'desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu',
    validatorAddress: 'desmosvaloper1fl7nsznuz4np9tj82m2g6m0w83ztzvflpe8kyk',
    amount: {
      denom: 'udaric',
      amount: 1000,
    },
  };

  const {
    delegatorAddress,
    validatorAddress,
    amount,
  } = message;

  return (
    <div className={classnames(className, classes.root)}>
      <AvatarDisplay
        address={delegatorAddress}
      />
      delegated
      <div>{amount.amount}</div>
      to
      <AvatarDisplay
        address={validatorAddress}
      />
    </div>
  );
};

export default Delegate;
