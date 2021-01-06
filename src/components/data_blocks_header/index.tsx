import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'i18n';
import { DataBlock } from 'big-dipper-default-ui';
import { convertNumber } from '@utils';
import { useGetStyles } from './styles';
import { getBlocktimeDurations } from './utils';
import {
  useLatestBlockHook,
  useActiveValidatorsHook,
  useAveragetimeBlockHook,
} from './hooks';

const DataBlocksHeader = () => {
  const { classes } = useGetStyles();
  const { t } = useTranslation('common');

  // ===============================
  // data hooks
  // ===============================
  const { latestBlockHeight } = useLatestBlockHook();
  const { validators } = useActiveValidatorsHook();
  const {
    averageBlockTimes,
    handleBlockTimeDurationClick,
    duration,
  } = useAveragetimeBlockHook();

  // ===============================
  // utils
  // ===============================
  const blockTimeDurations = getBlocktimeDurations(t);

  // ================================
  // display conversions
  // ================================
  const latestBlockHeightValue = convertNumber(latestBlockHeight?.height);
  const validatorsActiveValue = convertNumber(validators.active);
  const validatorsTotalValue = convertNumber(validators.total);
  const validatorsDisplay = `${t('outOf')} ${validatorsTotalValue.display} ${t('validators')}`.toLowerCase();
  const durationValue = `${convertNumber(averageBlockTimes[duration] ?? 0, {
    decimal: 2,
  }).display} s`;

  return (
    <div className={classnames(classes.root, 'data-blocks-container')}>
      <DataBlock
        label={t('latestBlockHeight')}
        value={latestBlockHeightValue.display}
        className="latest-block-height"
      />
      <DataBlock
        label={t('averageBlockTime')}
        value={durationValue}
        durations={blockTimeDurations}
        selectedValue={duration}
        durationsCallback={handleBlockTimeDurationClick}
        className="average-block-time"
      />
      <DataBlock
        label={t('price')}
        value="$ 0.00"
        className="price"
        durations={[{
          value: '24_hour',
          display: '24h',
        }]}
      />
      <DataBlock
        label={t('activeValidators')}
        value={validatorsActiveValue.value}
        className="active-validators"
        durations={[{
          value: '',
          display: validatorsDisplay,
        }]}
      />
    </div>
  );
};

export default DataBlocksHeader;
