import React from 'react';
import classnames from 'classnames';
import {
  AreaChart,
  Area,
} from 'recharts';
import { useGetStyles } from './styles';
import { Last7DaysProps } from './types';

const Last7Days = (props: Last7DaysProps) => {
  const { classes } = useGetStyles();
  const { data } = props;

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
