import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
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
  dummyLatestBlocksData, getLabelsMobile, getLabelsDesktop,
} from './utils';
import { useLatestBlocksHook } from './hooks';

const LatestBlocks = () => {
  const { t } = useTranslation(['home']);
  const { classes } = useGetStyles();
  const labelsMobile = getLabelsMobile(t);
  const labelsDesktop = getLabelsDesktop(t);
  const { handleClick } = useLatestBlocksHook();
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
          labels={labelsMobile}
          data={dummyLatestBlocksData}
          onClick={handleClick}
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
          labels={labelsDesktop}
          data={dummyLatestBlocksData}
          onClick={handleClick}
        />
      </TablePreviewWrapper>
    </>
  );
};

export default LatestBlocks;
