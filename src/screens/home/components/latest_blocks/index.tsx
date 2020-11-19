import React from 'react';
import classnames from 'classnames';
import {
  LatestBlocksMobile,
  TablePreviewWrapper,
  LatestBlocksDesktop,
} from 'big-dipper-default-ui';
import { useGetStyles } from './styles';
import {
  ActionMobile, FooterAction, ActionDesktop,
} from './components';
import {
  dummyLatestBlocksData, dummyLabelsMobile, dummyLabelsDesktop,
} from './utils';

const LatestBlocks = () => {
  const { classes } = useGetStyles();
  return (
    <>
      {/* ================================ */}
      {/* mobile */}
      {/* ================================ */}
      <TablePreviewWrapper
        className={classnames(classes.mobile)}
        title="Latest Blocks"
        action={ActionMobile}
        footerAction={FooterAction}
      >
        <LatestBlocksMobile
          labels={dummyLabelsMobile}
          data={dummyLatestBlocksData}
        />
      </TablePreviewWrapper>
      {/* ================================ */}
      {/* desktop */}
      {/* ================================ */}
      <TablePreviewWrapper
        className={classnames(classes.desktop)}
        title="Latest Blocks"
        action={ActionDesktop}
      >
        <LatestBlocksDesktop
          labels={dummyLabelsDesktop}
          data={dummyLatestBlocksData}
        />
      </TablePreviewWrapper>
    </>
  );
};

export default LatestBlocks;
