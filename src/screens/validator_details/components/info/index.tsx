import React from 'react';
import { ValidatorInfo } from 'big-dipper-default-ui';
import { useTranslation } from 'i18n';
import { useInfoHook } from './hooks';
import { useGetStyles } from './styles';

const Info = () => {
  const { t } = useTranslation(['validators', 'common']);
  const { classes } = useGetStyles();
  const {
    handleCopy,
    info,
    parsedInfo,
    isDesktop,
  } = useInfoHook(t);

  return (
    <ValidatorInfo
      className={classes.root}
      title="Validator Info"
      desktop={isDesktop}
      copyCallback={handleCopy}
      operatorAddress={{
        label: t('operatorAddress'),
        rawValue: info.operatorAddress,
        display: parsedInfo.operatorAddress,
      }}
      selfDelegateAddress={{
        label: t('selfDelegateAddress'),
        rawValue: info.selfDelegateAddress,
        display: parsedInfo.selfDelegateAddress,
      }}
      commissionRate={{
        label: t('commissionRate'),
        display: parsedInfo.commissionRate,
        description: t('commissionRateDescription'),
      }}
      maxChangeRate={{
        label: t('maxChangeRate'),
        display: parsedInfo.maxChangeRate,
        description: t('maxChangeRateDescription'),
      }}
      maxRate={{
        label: t('maxRate'),
        display: parsedInfo.maxRate,
        description: t('maxRateDescription'),
      }}
    />
  );
};

export default Info;
