import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import { DataBlock } from 'big-dipper-default-ui';
import { useGetStyles } from './styles';
import { getBlocktimeDurations } from './utils';
import { useDataBlocksHeaderHook } from './hooks';

const DataBlocksHeader = () => {
  const { classes } = useGetStyles();
  const { t } = useTranslation('common');
  const { handleBlockTimeDurationClick } = useDataBlocksHeaderHook();
  const blockTimeDurations = getBlocktimeDurations(t);
  return (
    <div className={classnames(classes.root, 'data-blocks-container')}>
      <DataBlock
        label={t('latestBlockHeight')}
        value="15,000"
        className="latest-block-height"
      />
      <DataBlock
        label={t('averageBlockTime')}
        value="15,000"
        durations={blockTimeDurations}
        durationsCallback={handleBlockTimeDurationClick}
        className="average-block-time"
      />
      <DataBlock
        label={t('price')}
        value="15,000"
        className="price"
      />
      <DataBlock
        label={t('activeValidators')}
        value="15,000"
        className="active-validators"
      />
    </div>
  );
};

export default DataBlocksHeader;
