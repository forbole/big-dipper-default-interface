import React from 'react';
import { useTranslation } from 'i18n';
import classnames from 'classnames';
import {
  AreaChart,
  Area,
} from 'recharts';
import { useGetStyles } from './styles';
import { data } from './utils';

const Last7Days = () => {
  const { t } = useTranslation(['accounts', 'activities']);
  const { classes } = useGetStyles();

  return (
    <div className={classnames(classes.root)}>
      <div className={classnames('chart')}>
        <AreaChart
          className={classnames('chartArea')}
          width={100}
          height={30}
          data={data}
        >
          <Area
            stroke="green"
            type="monotone"
            dataKey="uv"
            fill="url(#colorUv)"
          />
        </AreaChart>
      </div>
    </div>
  );
};

export default Last7Days;
