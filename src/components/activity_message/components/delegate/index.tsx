import React, { useContext } from 'react';
import * as R from 'ramda';
import { GlobalContext } from '@contexts';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import { getAddressDisplay } from '@utils';
import { MsgDelegate } from '@models';
import { useGetStyles } from './styles';

const Delegate = (props:any) => {
  const { t } = useTranslation(['activities']);
  const { className } = props;
  const { classes } = useGetStyles();
  const globalState = useContext(GlobalContext);
  const validatorsList = R.pathOr({
  }, ['validators'], globalState);

  // fake
  const message: MsgDelegate = {
    category: 'staking',
    type: '/cosmos.staking.v1beta1.MsgDelegate',
    delegatorAddress: 'desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu',
    validatorAddress: 'desmosvaloper1fl7nsznuz4np9tj82m2g6m0w83ztzvflpe8kyk',
    amount: {
      denom: 'udaric',
      amount: 1000,
    },
  };

  // const {
  //   delegatorAddress,
  //   validatorAddress,
  //   amount,
  // } = message;
  const validatorAddress = getAddressDisplay(message.validatorAddress, validatorsList);
  const delegatorAddress = getAddressDisplay(message.delegatorAddress, validatorsList);

  return (
    <div className={classnames(className, classes.root)}>
      <span>
        {delegatorAddress}
      </span>
      delegated
      <span>{message.amount.amount}</span>
      to
      <span>
        {validatorAddress}
      </span>
    </div>
  );
};

export default Delegate;
