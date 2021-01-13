import React from 'react';
import { useTranslation } from 'i18n';
import classnames from 'classnames';
import {
  ProposalResultDesktop,
  ProposalResultMobile,
} from 'big-dipper-default-ui';
import { useGetStyles } from './styles';
import { dummyData } from './utils';

const Vote = () => {
  const { t } = useTranslation(['proposals', 'common']);
  const { classes } = useGetStyles();

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
