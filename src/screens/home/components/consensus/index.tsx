import React from 'react';
import classnames from 'classnames';
import { Consensus } from '@forbole/big-dipper-default-ui';
import { useTranslation } from 'i18n';
import { useTheme } from '@material-ui/core/styles';
import { useGetStyles } from './styles';
import { dummyProposerData } from './utils';

const ConsensusState = () => {
  const { classes } = useGetStyles();
  const { t } = useTranslation(['home']);
  const theme: any = useTheme();
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
      colors={['#FD3B4C', theme?.palette?.type === 'light' ? '#E8E8E8' : '#3D3D43']}
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
