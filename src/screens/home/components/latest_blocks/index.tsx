import React from 'react';
import classnames from 'classnames';
import {
  LatestBlocksMobile,
  TablePreviewWrapper,
} from 'big-dipper-default-ui';
import { dummyLatestBlocksData } from './utils';
import { useGetStyles } from './styles';
import {
  ActionMobile, FooterAction,
} from './components';

const LatestBlocks = () => {
  const { classes } = useGetStyles();
  return (
    // ================================
    // mobile
    // ================================
    <TablePreviewWrapper
      className={classnames(classes.mobile)}
      title="Latest Blocks"
      action={ActionMobile}
      footerAction={FooterAction}
    >
      <LatestBlocksMobile data={dummyLatestBlocksData} />
    </TablePreviewWrapper>
  );
};

export default LatestBlocks;
