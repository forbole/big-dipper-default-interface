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
        rawValue: info.operatorAddress.raw,
        display: info.operatorAddress.display,
      }}
      selfDelegateAddress={{
        label: t('selfDelegateAddress'),
        rawValue: info.selfDelegateAddress.raw,
        display: info.selfDelegateAddress.display,
      }}
      commissionRate={{
        label: t('commissionRate'),
        display: info.commissionRate,
        description: t('commissionRateDescription'),
      }}
      maxChangeRate={{
        label: t('maxChangeRate'),
        display: info.maxChangeRate,
        description: t('maxChangeRateDescription'),
      }}
      maxRate={{
        label: t('maxRate'),
        display: info.maxRate,
        description: t('maxRateDescription'),
      }}
    />
  );
};

export default Info;
