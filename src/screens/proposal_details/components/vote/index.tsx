import React from 'react';
import classnames from 'classnames';
import {
  ProposalResultDesktop,
  ProposalResultMobile,
} from '@forbole/big-dipper-default-ui';
import { useGetStyles } from './styles';
import { dummyData } from './utils';

const Vote = () => {
  const { classes } = useGetStyles(dummyData);

  return (
    <div className={classes.root}>
      <ProposalResultDesktop
        className={classnames(classes.root)}
        {...dummyData}
      />
      <ProposalResultMobile
        className={classnames(classes.root)}
        {...dummyData}
      />
    </div>
  );
};

export default Vote;
