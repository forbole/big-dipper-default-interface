import React from 'react';
import classnames from 'classnames';
import {
  LatestBlocksMobile,
  TablePreviewWrapper,
} from 'big-dipper-default-ui';
import { useGetStyles } from './styles';
import {
  ActionMobile, FooterAction,
} from './components';
import {
  dummyLatestBlocksData, dummyLabelsMobile,
} from './utils';

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
      <LatestBlocksMobile
        labels={dummyLabelsMobile}
        data={dummyLatestBlocksData}
      />
    </TablePreviewWrapper>
  );
};

export default LatestBlocks;
