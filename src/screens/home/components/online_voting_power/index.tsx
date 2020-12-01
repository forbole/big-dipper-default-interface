import React from 'react';
import {
  OnlineVotingPower as OnlineVotingPowerUi, SelectTabs,
} from 'big-dipper-default-ui';
import { useTranslation } from 'i18n';
import classnames from 'classnames';
import {
  formatNumber, useGetScreenSize,
} from '@utils';
import { useGetStyles } from './styles';
import { fakeData } from './utils';
import { useOnlineVotingPowerHook } from './hooks';

const OnlineVotingPower = () => {
  const { t } = useTranslation('home');
  const { classes } = useGetStyles();
  const windowSize = useGetScreenSize();
  const {
    gridAspect,
    getCartesianGridStroke,
  } = useOnlineVotingPowerHook(windowSize);
  const cartesianGridStroke = getCartesianGridStroke();

  return (
    <div className={classnames(classes.root)}>
      <SelectTabs
        selected="onlineVotingPower"
        tabs={[
          {
            key: 'onlineVotingPower',
            display: t('onlineVotingPower'),
            component: (
              <OnlineVotingPowerUi
                data={fakeData}
                recharts={{
                  gridAspect,
                  axis: {
                    fontSize: 12,
                  },
                  cartesianGrid: {
                    stroke: cartesianGridStroke,
                  },
                  toolTipFormatter: (value) => formatNumber(value),
                }}
              />
            ),
          },
        ]}
      />
    </div>
  );
};

export default OnlineVotingPower;
