import React from 'react';
import classnames from 'classnames';
// import { useTranslation } from 'i18n';
import { Consensus } from 'big-dipper-default-ui';
import { useGetStyles } from './styles';
import { dummyProposerData } from './utils';

export const colors = ['#FF7846', '#FFD800'];

const ConsensusState = () => {
  const { classes } = useGetStyles();
  // const { t } = useTranslation(['home']);
  return (
    <Consensus
      className={classnames(classes.root)}
      title="Consensus State"
      height={{
        title: 'Height',
        display: '2,769,405',
      }}
      proposer={dummyProposerData}
      votingPower={{
        title: 'Voting Power',
        value: 0.85,
      }}
      colors={['#FD3B4C', '#E8E8E8']}
      round={{
        title: 'Round',
        display: '6',
      }}
      step={{
        title: 'Step',
        display: '4',
      }}
      // icon="public/images/icons/favicon-16*16.png"
    />
  );
};

export default ConsensusState;
