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
  const url = '/blocks';
  return (
    <>
      {/* ================================ */}
      {/* mobile */}
      {/* ================================ */}
      <TablePreviewWrapper
        className={classnames(classes.mobile)}
        title={t('latestBlocks')}
        action={<ActionMobile url={url} />}
        footerAction={<FooterAction url={url} />}
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
        action={<ActionMobile url={url} />}
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
