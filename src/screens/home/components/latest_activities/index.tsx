import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import {
  TablePreviewWrapper,
  LatestActivitiesMobile,
  LatestActivitiesDesktop,
} from 'big-dipper-default-ui';
import {
  useMobileOnlyStyles,
  useDesktopOnlyStyles,
  useLatestActivitiesMobileStyles,
  useTablePreviewWrapperStyles,
} from '@styles';
import {
  dummyLatestActivitiesData, dummyLatestActivitiesDataDesktop,
} from './utils';
import {
  ActionMobile, FooterAction, ActionDesktop,
} from '..';
import { useGetStyles } from './styles';
import { useLatestActivitiesHook } from './hooks';

const LatestActivities = () => {
  const { t } = useTranslation(['home']);
  const { classes } = useGetStyles();
  const { classes: mobileOnlyStyles } = useMobileOnlyStyles();
  const { classes: desktopOnlyStyles } = useDesktopOnlyStyles();
  const { classes: latestActivitiesMobileStyles } = useLatestActivitiesMobileStyles();
  const { classes: tablePreviewWrapperStyles } = useTablePreviewWrapperStyles();
  const { handleClick } = useLatestActivitiesHook();
  const url = '/activities';
  return (
    <>
      {/* ================================= */}
      {/* Mobile */}
      {/* ================================= */}
      <TablePreviewWrapper
        className={classnames(tablePreviewWrapperStyles.root, mobileOnlyStyles.root)}
        title={t('latestActivities')}
        action={<ActionMobile url={url} />}
        footerAction={<FooterAction url={url} />}
      >
        <LatestActivitiesMobile
          className={classnames(
            mobileOnlyStyles.root,
            latestActivitiesMobileStyles.root,
          )}
          data={dummyLatestActivitiesData}
          onClick={handleClick}
        />
      </TablePreviewWrapper>
      {/* ================================= */}
      {/* Desktop */}
      {/* ================================= */}
      <TablePreviewWrapper
        className={classnames(classes.desktop)}
        title={t('latestActivities')}
        action={<ActionDesktop url={url} />}
      >
        <LatestActivitiesDesktop
          data={dummyLatestActivitiesDataDesktop}
          onClick={handleClick}
        />
      </TablePreviewWrapper>
    </>
  );
};

export default LatestActivities;
