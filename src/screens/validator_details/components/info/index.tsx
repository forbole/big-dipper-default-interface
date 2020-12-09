import React from 'react';
import { ValidatorInfo } from 'big-dipper-default-ui';
import { useTranslation } from 'i18n';
import { useGetScreenSizeHook } from '@hooks';
import { useInfoHook } from './hooks';
import { useGetStyles } from './styles';
import {
  dummyData, formatData,
} from './utils';

const Info = () => {
  const { t } = useTranslation(['validators', 'common']);
  const windowSize = useGetScreenSizeHook();
  const { classes } = useGetStyles();
  const {
    handleCopy, isDesktop,
  } = useInfoHook(t, windowSize);
  const formatDummyData = formatData(dummyData, isDesktop);

  return (
    <ValidatorInfo
      className={classes.root}
      title="Validator Info"
      desktop={isDesktop}
      copyCallback={handleCopy}
      operatorAddress={{
        label: t('operatorAddress'),
        rawValue: '123456678',
        display: formatDummyData.operatorAddress,
      }}
      selfDelegateAddress={{
        label: t('selfDelegateAddress'),
        rawValue: '123456678',
        display: formatDummyData.selfDelegateAddress,
      }}
      commissionRate={{
        label: t('commissionRate'),
        display: '10%',
        description: t('commissionRateDescription'),
      }}
      maxChangeRate={{
        label: t('maxChangeRate'),
        display: '2%',
        description: t('maxChangeRateDescription'),
      }}
      maxRate={{
        label: t('maxRate'),
        display: '5%',
        description: t('maxRateDescription'),
      }}
    />
  );
};

export default Info;
