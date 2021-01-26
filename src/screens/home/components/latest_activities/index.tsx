import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import { TablePreviewWrapper } from 'big-dipper-default-ui';
import { ActivitiesList } from '@components';
import { useGetScreenSizeHook } from '@hooks';
import { useTablePreviewWrapperStyles } from '@styles';
import {
  ActionMobile, FooterAction, ActionDesktop,
} from '..';
import { useGetStyles } from './styles';
import { useLatestActivitiesHook } from './hooks';

const LatestActivities = () => {
  const URL = '/activities';
  const { isDesktop } = useGetScreenSizeHook();
  const { t } = useTranslation(['home']);
  const {
    handleClick,
    latestActivities,
  } = useLatestActivitiesHook();

  // =============================
  // styles
  // =============================
  const { classes } = useGetStyles();
  const { classes: tablePreviewWrapperStyles } = useTablePreviewWrapperStyles();

  return (
    <TablePreviewWrapper
      className={classnames(tablePreviewWrapperStyles.root, classes.tablePreviewWrapper)}
      title={t('latestActivities')}
      action={isDesktop ? <ActionDesktop url={URL} /> : <ActionMobile url={URL} />}
      footerAction={!isDesktop ? <FooterAction url={URL} /> : undefined}
    >
      <ActivitiesList
        onClick={handleClick}
        data={latestActivities}
      />
    </TablePreviewWrapper>
  );
};

export default LatestActivities;
