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
  getLabelsMobile,
  getLabelsDesktop,
  formatLatestBlocksData,
} from './utils';
import { useLatestBlocksHook } from './hooks';

const LatestBlocks = () => {
  const { t } = useTranslation(['home']);
  const URL = '/blocks';
  const {
    handleClick, latestBlocks,
  } = useLatestBlocksHook();

  // =============================
  // styles
  // =============================
  const { classes: latestBlocksDesktopStyles } = useLatestBlocksDesktopStyles();
  const { classes: latestBlocksMobileStyles } = useLatestBlocksMobileStyles();
  const { classes: mobileOnlyStyles } = useMobileOnlyStyles();
  const { classes: desktopOnlyStyles } = useDesktopOnlyStyles();
  const { classes: tablePreviewWrapperStyles } = useTablePreviewWrapperStyles();
  const labelsMobile = getLabelsMobile(t);
  const labelsDesktop = getLabelsDesktop(t);

  // =============================
  // format data for display
  // =============================
  const latestBlocksData = formatLatestBlocksData(latestBlocks);

  return (
    <>
      {/* ================================ */}
      {/* mobile */}
      {/* ================================ */}
      <TablePreviewWrapper
        className={classnames(tablePreviewWrapperStyles.root, mobileOnlyStyles.root)}
        title={t('latestBlocks')}
        action={<ActionMobile url={URL} />}
        footerAction={<FooterAction url={URL} />}
      >
        <LatestBlocksMobile
          className={classnames(latestBlocksMobileStyles.root)}
          labels={labelsMobile}
          data={latestBlocksData}
          onClick={handleClick}
        />
      </TablePreviewWrapper>
      {/* ================================ */}
      {/* desktop */}
      {/* ================================ */}
      <TablePreviewWrapper
        className={classnames(tablePreviewWrapperStyles.root, desktopOnlyStyles.root)}
        title="Latest Blocks"
        action={<ActionDesktop url={URL} />}
      >
        <LatestBlocksDesktop
          className={classnames(latestBlocksDesktopStyles.root)}
          labels={labelsDesktop}
          data={latestBlocksData}
          onClick={handleClick}
        />
      </TablePreviewWrapper>
    </>
  );
};

export default LatestBlocks;
