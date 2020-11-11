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
  console.log(t('latestBlockHeight'), 'wtf');
  const { handleBlockTimeDurationClick } = useDataBlocksHeaderHook();
  const blockTimeDurations = getBlocktimeDurations(t);
  return (
    <div className={classnames(classes.root, 'data-blocks-container')}>
      <DataBlock
        label={t('latestBlockHeight')}
        value="2,768,643"
        className="latest-block-height"
      />
      <DataBlock
        label={t('averageBlockTime')}
        value="7.11 s"
        durations={blockTimeDurations}
        durationsCallback={handleBlockTimeDurationClick}
        className="average-block-time"
      />
      <DataBlock
        label={t('price')}
        value="$ 2.75"
        className="price"
        durations={[{
          value: '24_hour',
          display: '24h',
        }]}
      />
      <DataBlock
        label={t('activeValidators')}
        value="125"
        className="active-validators"
        durations={[{
          value: '',
          display: 'out of 246 validators',
        }]}
      />
    </div>
  );
};

export default DataBlocksHeader;
