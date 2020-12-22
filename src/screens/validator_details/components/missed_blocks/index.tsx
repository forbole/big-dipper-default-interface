import React from 'react';
import { ValidatorBlocks } from 'big-dipper-default-ui';
import { useGetScreenSizeHook } from '@hooks';
import {
  dummyData, getAspect,
} from './utils';
import { useGetStyles } from './styles';

const MissedBlocks = () => {
  const { classes } = useGetStyles();
  const {
    isTablet,
    isDesktop,
  } = useGetScreenSizeHook();

  const rechartsAspect = getAspect({
    isDesktop,
    isTablet,
  });

  return (
    <ValidatorBlocks
      className={classes.root}
      title="Missed Blocks"
      description="10/10000 (19h)"
      labels={{
        proposer: 'Proposer',
        height: 'Height',
        votingPower: 'Voting Power',
        gas: 'Gas (used/wanted)',
        missed: 'Missed',
        voted: 'Voted',
        yes: 'Yes',
        no: 'No',
        signatures: 'Signatures',
      }}
      legend={{
        missed: '#FD3B4C',
        voted: '#1EC4904D',
      }}
      recharts={{
        gridAspect: rechartsAspect,
      }}
      data={dummyData}
    />
  );
};

export default MissedBlocks;
