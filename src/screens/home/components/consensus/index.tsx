import React from 'react';
import classnames from 'classnames';
import { Consensus } from 'big-dipper-default-ui';
import { useTranslation } from 'i18n';
import { useTheme } from '@material-ui/core/styles';
import { useGetStyles } from './styles';
import {
  formatProposer,
  toCurrency,
  toPercentage,
  toPercentageDisplay,
} from './utils';
import {
  useConsensusHook,
  useConsensusPoolHook,
  useProposerHook,
} from './hooks';

const ConsensusState = () => {
  const { classes } = useGetStyles();
  const { t } = useTranslation(['home']);
  const theme: any = useTheme();
  const { consensus } = useConsensusHook();
  const { consensusPool } = useConsensusPoolHook();
  const { proposer } = useProposerHook();

  return (
    <Consensus
      className={classnames(classes.root)}
      title={t('consensusTitle')}
      height={{
        title: t('height'),
        display: toCurrency(consensus.height),
      }}
      proposer={{
        title: t('proposer'),
        display: formatProposer(proposer),
      }}
      votingPower={{
        title: t('votingPowerTitle'),
        value: toPercentage(proposer.validator.votingPower, consensusPool.bondedTokens),
        display: toPercentageDisplay(proposer.validator.votingPower, consensusPool.bondedTokens),
      }}
      colors={['#FD3B4C', theme?.palette?.type === 'light' ? '#E8E8E8' : '#3D3D43']}
      round={{
        title: t('roundTitle'),
        display: consensus.round.toString(),
      }}
      step={{
        title: t('stepTitle'),
        display: consensus.step,
      }}
    />
  );
};

export default ConsensusState;
