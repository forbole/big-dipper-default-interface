import React from 'react';
import { useTranslation } from 'i18n';
import classnames from 'classnames';
import { BlockDetails } from 'big-dipper-default-ui';
import { useGetScreenSizeHook } from '@hooks';
import { useGetStyles } from './styles';
import {
  ProposerDesktop,
  ProposerMobile,
  signatureData,
} from './utils';

const BlockDetailsTable = () => {
  const { t } = useTranslation(['blocks', 'activities']);
  const { isDesktop } = useGetScreenSizeHook();
  const { classes } = useGetStyles();
  return (
    <BlockDetails
      className={classnames(classes.root)}
      title="Block # 2,768,644"
      txHash={{
        display: t('txHash'),
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
        value: isDesktop ? <ProposerDesktop /> : <ProposerMobile />,
      }}
      signedVotingPower={{
        display: t('signedVotingPower'),
        value: '89%',
      }}
      signatures={{
        display: t('signatures'),
        value: '100 signatures',
        tableHead: {
          validator: t('validator'),
          votingPower: t('votingPower'),
          votingPowerPercentage: t('votingPowerPercentage'),
          signStatus: t('signStatus'),
        },
      }}
      data={signatureData}
      desktop={!!isDesktop}
    />
  );
};

export default BlockDetailsTable;
