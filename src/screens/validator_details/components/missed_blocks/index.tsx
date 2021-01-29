import React from 'react';
import { ValidatorBlocks } from 'big-dipper-default-ui';
import { useTranslation } from 'i18n';
import { useGetScreenSizeHook } from '@hooks';
import {
  getAspect,
  getLabels,
} from './utils';
import { useGetStyles } from './styles';
import { useValidatorBlocksHook } from './hooks';

const MissedBlocks = () => {
  const { t } = useTranslation(['validators', 'common']);
  const { classes } = useGetStyles();
  const {
    isTablet,
    isDesktop,
  } = useGetScreenSizeHook();
  const { blockInfo } = useValidatorBlocksHook();
  const rechartsAspect = getAspect({
    isDesktop,
    isTablet,
  });

  const labels = getLabels(t);

  return (
    <ValidatorBlocks
      className={classes.root}
      title="Missed Blocks"
      description="10/10000 (19h)"
      labels={labels}
      legend={{
        missed: '#FD3B4C',
        voted: '#1EC4904D',
      }}
      recharts={{
        gridAspect: rechartsAspect,
      }}
      data={blockInfo}
    />
  );
};

export default MissedBlocks;
