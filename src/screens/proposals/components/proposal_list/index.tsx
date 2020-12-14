import React from 'react';
import classnames from 'classnames';
import { useGetScreenSizeHook } from '@hooks';
import { ProposalList } from 'big-dipper-default-ui';
import { dummyProposalList } from './utils';
import { useGetStyles } from './styles';
import { useProposalListHook } from './hooks';

const Proposal = () => {
  const { classes } = useGetStyles();
  const { isDesktop } = useGetScreenSizeHook();
  const { handleClick } = useProposalListHook();
  return (
    <ProposalList
      className={classnames(classes.root)}
      data={dummyProposalList}
      desktop={isDesktop}
      onClick={handleClick}
    />
  );
};

export default Proposal;
