import React from 'react';
import {
  OnlineVotingPower as OnlineVotingPowerUi, SelectTabs,
} from 'big-dipper-default-ui';
import classnames from 'classnames';
import {
  formatNumber, useGetScreenSize,
} from '@utils';
import { useGetStyles } from './styles';
import { fakeData } from './utils';
import { useOnlineVotingPowerHook } from './hooks';

const OnlineVotingPower = () => {
  const { classes } = useGetStyles();
  const windowSize = useGetScreenSize();
  const { gridAspect } = useOnlineVotingPowerHook(windowSize);

  return (
    <div className={classnames(classes.root)}>
      <SelectTabs
        selected="onlineVotingPower"
        tabs={[
          {
            key: 'onlineVotingPower',
            display: 'Online Voting Power',
            component: (
              <OnlineVotingPowerUi
                data={fakeData}
                recharts={{
                  gridAspect,
                  axis: {
                    fontSize: 12,
                  },
                  cartesianGrid: {
                    stroke: '#E8E8E8',
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
