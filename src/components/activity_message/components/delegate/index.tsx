import React, { useContext } from 'react';
import * as R from 'ramda';
import { GlobalContext } from '@contexts';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import {
  getAddressDisplay, formatDenom,
} from '@utils';
import { MsgDelegate } from '@models';
import { chainConfig } from '@src/chain_config';
import { useGetStyles } from './styles';
import { TypeTag } from '..';

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
      amount: 10003400,
    },
  };

  const validatorAddress = getAddressDisplay(message.validatorAddress, validatorsList);
  const delegatorAddress = getAddressDisplay(message.delegatorAddress, validatorsList);
  const parsedAmount = formatDenom(chainConfig.display, message.amount.amount, '0,0.0[000]');

  return (
    <div className={classnames(className, classes.root)}>
      <p className={classnames('body')}>
        <span className="address">
          {delegatorAddress}
        </span>
        {' '}
        delegated
        {' '}
        <span className="amount">
          {parsedAmount.format}
          {' '}
          {chainConfig.display.toUpperCase()}
        </span>
        {' '}
        to
        {' '}
        <span className="address">
          {validatorAddress}
        </span>
      </p>
      <TypeTag
        type="staking"
        display="delegate"
      />
    </div>
  );
};

export default Delegate;
