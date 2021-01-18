import React, { useContext } from 'react';
import * as R from 'ramda';
import numeral from 'numeral';
import { GlobalContext } from '@contexts';
import { useTranslation } from 'i18n';
import {
  getAddressDisplay, formatDenom,
} from '@utils';
import { MsgDelegate } from '@models';
import { chainConfig } from '@src/chain_config';

const Delegate = () => {
  const { t } = useTranslation(['activities']);
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
  const parsedAmount = `${formatDenom(chainConfig.display, numeral(message.amount.amount).value(), '0,0.0[000]').format} ${chainConfig.display.toUpperCase()}`;

  return (
    <p>
      <span className="address">
        {delegatorAddress}
      </span>
      {' '}
      {t('delegated')}
      {' '}
      <span className="amount">
        {parsedAmount}
      </span>
      {' '}
      {t('to')}
      {' '}
      <span className="address">
        {validatorAddress}
      </span>
    </p>
  );
};

export default Delegate;
