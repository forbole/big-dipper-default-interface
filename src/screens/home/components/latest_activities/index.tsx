import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import {
  TablePreviewWrapper,
  LatestActivitiesMobile,
  LatestActivitiesDesktop,
} from 'big-dipper-default-ui';
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
  const { handleClick } = useLatestActivitiesHook();
  const url = '/activities';
  return (
    <>
      {/* ================================= */}
      {/* Mobile */}
      {/* ================================= */}
      <TablePreviewWrapper
        className={classnames(classes.mobile)}
        title={t('latestActivities')}
        action={<ActionMobile url={url} />}
        footerAction={<FooterAction url={url} />}
      >
        <LatestActivitiesMobile
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
