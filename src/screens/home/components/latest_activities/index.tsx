import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import {
  TablePreviewWrapper,
  // LatestActivitiesMobile,
  // LatestActivitiesDesktop,
  LatestActivities as LatestActivitiesComponent,
} from 'big-dipper-default-ui';
import { useGetScreenSizeHook } from '@hooks';
import {
  useMobileOnlyStyles,
  useDesktopOnlyStyles,
  useLatestActivitiesMobileStyles,
  useTablePreviewWrapperStyles,
  useLatestActivitiesDesktopStyles,
  useLatestActivitiesStyles,
} from '@styles';
import { dummyLatestActivities } from './utils';
import {
  ActionMobile, FooterAction, ActionDesktop,
} from '..';
import { useGetStyles } from './styles';
import { useLatestActivitiesHook } from './hooks';

const LatestActivities = () => {
  const { isDesktop } = useGetScreenSizeHook();
  const { t } = useTranslation(['home']);
  const { classes } = useGetStyles();
  const { classes: latestActivitiesStyles } = useLatestActivitiesStyles();
  const { classes: tablePreviewWrapperStyles } = useTablePreviewWrapperStyles();
  const { handleClick } = useLatestActivitiesHook();
  const url = '/activities';
  return (
    <TablePreviewWrapper
      className={classnames(tablePreviewWrapperStyles.root, classes.tablePreviewWrapper)}
      title={t('latestActivities')}
      action={isDesktop ? <ActionDesktop url={url} /> : <ActionMobile url={url} />}
      footerAction={!isDesktop ? <FooterAction url={url} /> : undefined}
    >
      <LatestActivitiesComponent
        className={latestActivitiesStyles.root}
        transactions={dummyLatestActivities}
        onClick={handleClick}
      />
    </TablePreviewWrapper>
  );
};

export default LatestActivities;
