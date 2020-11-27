import React from 'react';
import classnames from 'classnames';
import { Consensus } from 'big-dipper-default-ui';
import { useTranslation } from 'i18n';
import { useGetStyles } from './styles';
import { dummyProposerData } from './utils';

export const colors = ['#FF7846', '#FFD800'];

const ConsensusState = () => {
  const { classes } = useGetStyles();
  const { t } = useTranslation(['home']);
  return (
    <Consensus
      className={classnames(classes.root)}
      title={t('consensusTitle')}
      height={{
        title: t('height'),
        display: '2,769,405',
      }}
      proposer={dummyProposerData}
      votingPower={{
        title: t('votingPowerTitle'),
        value: 0.85,
      }}
      colors={['#FD3B4C', '#E8E8E8']}
      round={{
        title: t('roundTitle'),
        display: '6',
      }}
      step={{
        title: t('stepTitle'),
        display: '4',
      }}
    />
  );
};

export default ConsensusState;
