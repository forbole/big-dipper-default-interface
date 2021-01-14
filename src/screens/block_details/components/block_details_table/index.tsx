import React from 'react';
import numeral from 'numeral';
import moment from 'moment';
import { useTranslation } from 'i18n';
import classnames from 'classnames';
import { BlockDetails } from 'big-dipper-default-ui';
import { AvatarDisplay } from '@components';
import { useGetScreenSizeHook } from '@hooks';
import { useGetStyles } from './styles';
import {
  Proposer,
  signatureData,
} from './utils';
import { BlockDetailsTableProps } from './types';

const BlockDetailsTable = (props:BlockDetailsTableProps) => {
  const { data } = props;
  const { t } = useTranslation(['blocks', 'activities']);

  // ========================
  // styles
  // ========================
  const { isDesktop } = useGetScreenSizeHook();
  const { classes } = useGetStyles();

  return (
    <BlockDetails
      className={classnames(classes.root)}
      title="Block # 2,768,644"
      hash={{
        display: t('hash'),
        value: data.hash,
      }}
      time={{
        display: t('timeDisplay'),
        value: moment(data.timestamp).format('Do MMM YYYY, HH:mm:ss UTC'),
      }}
      noTransactions={{
        display: t('noTransactions'),
        value: numeral(data.tx).format('0,0'),
      }}
      proposer={{
        display: t('proposer'),
        value: <AvatarDisplay
          identity={data.validator.identity}
          display={data.validator.moniker}
          address={data.validator.validatorAddress}
        />,
      }}
      signedVotingPower={{
        display: t('signedVotingPower'),
        value: '89%',
      }}
      signatures={{
        display: 'Signatures',
        value: '100 signatures',
        labels: {
          validator: 'Validator',
          votingPower: 'Voting Power',
          votingPowerPercentage: 'Voting Power (Percentage)',
          signStatus: 'Sign Status',
        },
        data: signatureData,
      }}
      desktop={isDesktop}
    />
  );
};

export default BlockDetailsTable;
