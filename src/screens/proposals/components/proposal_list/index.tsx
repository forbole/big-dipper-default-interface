import React from 'react';
import classnames from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/classnames';
import InfiniteScroll from 'react-infinite-scroller';
import { useGetScreenSizeHook } from '@hooks';
import { ProposalList as Proposals } from 'big-dipper-default-ui';
import { InfiniteLoader } from '@components';
import { useGetStyles } from './styles';
import { ProposalListProps } from './types';

const ProposalList = (props: ProposalListProps) => {
  const { classes } = useGetStyles();
  const { isDesktop } = useGetScreenSizeHook();
  const {
    isToggled,
    handleLoadMore,
    state,
    handleClick,
    proposerDisplay,
  } = props;
  const {
    data,
    hasMore,
  } = state;

  let formatData = data;
  if (!isToggled) {
    formatData = formatData.filter((x) => x.id % 2);
  }

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={handleLoadMore}
      hasMore={hasMore}
      loader={<InfiniteLoader key={0} />}
    >
      <Proposals
        className={classnames(classes.root)}
        data={formatData}
        desktop={isDesktop}
        onClick={handleClick}
        proposerDisplay={proposerDisplay}
      />
    </InfiniteScroll>
  );
};

export default ProposalList;
