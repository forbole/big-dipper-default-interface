import React from 'react';
import classnames from 'classnames';
import InfiniteScroll from 'react-infinite-scroller';
import { useGetScreenSizeHook } from '@hooks';
import { ProposalList } from 'big-dipper-default-ui';
import { InfiniteLoader } from '@components';
import { useGetStyles } from './styles';
import { ProposalListProps } from './types';

const Proposal = (props: ProposalListProps) => {
  const { classes } = useGetStyles();
  const { isDesktop } = useGetScreenSizeHook();
  const {
    isToggled,
    handleLoadMore,
    state,
    handleClick,
  } = props;
  const {
    data,
    hasMore,
  } = state;

  let formatData = data;
  if (!isToggled) {
    formatData = formatData.filter((x) => x.id < 10);
  }

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={handleLoadMore}
      hasMore={hasMore}
      loader={<InfiniteLoader key={0} />}
    >
      <ProposalList
        className={classnames(classes.root)}
        data={formatData}
        desktop={isDesktop}
        onClick={handleClick}
      />
    </InfiniteScroll>
  );
};

export default Proposal;
