import React from 'react';
import { useTranslation } from 'i18n';
import classnames from 'classnames';
import { BlockDetails } from 'big-dipper-default-ui';
import { useGetScreenSizeHook } from '@hooks';
import { useGetStyles } from './styles';
import { useBlockDetailsTable } from './hooks';
import {
  Proposer,
  signatureData,
} from './utils';

const BlockDetailsTable = () => {
  const { t } = useTranslation(['blocks', 'activities']);
  const { isDesktop } = useGetScreenSizeHook();
  const { classes } = useGetStyles();
  const {} = useBlockDetailsTable();
  return (
    <BlockDetails
      className={classnames(classes.root)}
      title="Block # 2,768,644"
      hash={{
        display: t('hash'),
        value: '73FCAFE9BAF19BB405086CFFA1C8FEC510486AFAC5CBD48A2F57A3C79ABA1255',
      }}
      time={{
        display: t('timeDisplay'),
        value: '10 Jan 2020, 12:59:27 UTC',
      }}
      noTransactions={{
        display: t('noTransactions'),
        value: '1',
      }}
      proposer={{
        display: t('proposer'),
        value: <Proposer />,
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
