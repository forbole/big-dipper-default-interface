import React from 'react';
import classnames from 'classnames';
import { useGetScreenSizeHook } from '@hooks';
import { ProposalList } from 'big-dipper-default-ui';
import { dummyProposalList } from './utils';
import { useGetStyles } from './styles';

const Proposal = () => {
  const { classes } = useGetStyles();
  const { isDesktop } = useGetScreenSizeHook();
  return (
    <ProposalList
      className={classnames(classes.root)}
      data={dummyProposalList}
      desktop={isDesktop}
      imageUrl="/images/icons/wall-clock.png"
    />

  );
};

export default Proposal;
