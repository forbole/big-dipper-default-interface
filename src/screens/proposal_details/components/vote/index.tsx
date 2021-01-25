import React from 'react';
import classnames from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/classnames';
import {
  ProposalResultDesktop,
  ProposalResultMobile,
} from 'big-dipper-default-ui';
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
