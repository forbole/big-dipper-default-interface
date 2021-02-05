import React from 'react';
import {
  OnlineVotingPower as OnlineVotingPowerUi, SelectTabs,
} from '@forbole/big-dipper-default-ui';
import { useTranslation } from 'i18n';
import classnames from 'classnames';
import { useGetStyles } from './styles';
import { useOnlineVotingPowerHook } from './hooks';

const OnlineVotingPower = () => {
  const { t } = useTranslation('home');
  const { classes } = useGetStyles();
  const { onlineVotingPower } = useOnlineVotingPowerHook();

  return (
    <div className={classnames(classes.root)}>
      <h3>{t('onlineVotingPower')}</h3>
      {/* <SelectTabs
        selected="onlineVotingPower"
        tabs={[
          {
            key: 'onlineVotingPower',
            display: t('onlineVotingPower'),
            component: (
              <OnlineVotingPowerUi
                data={fakeData}
                recharts={{
                  axis: {
                    fontSize: 12,
                  },
                  cartesianGrid: {
                    stroke: cartesianGridStroke,
                  },
                  toolTipFormatter: (value) => convertNumber(value).display,
                }}
              />
            ),
          },
        ]}
      /> */}
    </div>
  );
};

export default OnlineVotingPower;
