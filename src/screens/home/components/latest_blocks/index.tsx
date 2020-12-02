import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import {
  LatestBlocksMobile,
  TablePreviewWrapper,
  LatestBlocksDesktop,
} from 'big-dipper-default-ui';
import {
  useLatestBlocksDesktopStyles,
  useLatestBlocksMobileStyles,
  useMobileOnlyStyles,
  useDesktopOnlyStyles,
  useTablePreviewWrapperStyles,
} from '@styles';
import {
  ActionMobile,
  FooterAction,
  ActionDesktop,
} from './components';
import {
  dummyLatestBlocksData,
  getLabelsMobile,
  getLabelsDesktop,
} from './utils';
import { useLatestBlocksHook } from './hooks';

const LatestBlocks = () => {
  const { t } = useTranslation(['home']);
  const { classes: latestBlocksDesktopStyles } = useLatestBlocksDesktopStyles();
  const { classes: latestBlocksMobileStyles } = useLatestBlocksMobileStyles();
  const { classes: mobileOnlyStyles } = useMobileOnlyStyles();
  const { classes: desktopOnlyStyles } = useDesktopOnlyStyles();
  const { classes: tablePreviewWrapperStyles } = useTablePreviewWrapperStyles();
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
        className={classnames(tablePreviewWrapperStyles.root, mobileOnlyStyles.root)}
        title={t('latestBlocks')}
        action={<ActionMobile url={url} />}
        footerAction={<FooterAction url={url} />}
      >
        <LatestBlocksMobile
          className={classnames(latestBlocksMobileStyles.root)}
          labels={labelsMobile}
          data={dummyLatestBlocksData}
          onClick={handleClick}
        />
      </TablePreviewWrapper>
      {/* ================================ */}
      {/* desktop */}
      {/* ================================ */}
      <TablePreviewWrapper
        className={classnames(tablePreviewWrapperStyles.root, desktopOnlyStyles.root)}
        title="Latest Blocks"
        action={<ActionDesktop url={url} />}
      >
        <LatestBlocksDesktop
          className={classnames(latestBlocksDesktopStyles.root)}
          labels={labelsDesktop}
          data={dummyLatestBlocksData}
          onClick={handleClick}
        />
      </TablePreviewWrapper>
    </>
  );
};

export default LatestBlocks;
