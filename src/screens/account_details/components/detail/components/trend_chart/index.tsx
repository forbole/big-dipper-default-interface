import React from 'react';
import classnames from 'classnames';
import {
  AreaChart,
  Area,
} from 'recharts';
import { ArrowDropDown } from '@material-ui/icons';
import { useGetStyles } from './styles';
import { TrendChartProps } from './types';

const TrendChart = (props: TrendChartProps) => {
  const { classes } = useGetStyles();
  const {
    numberDisplay,
    data,
  } = props;
  return (
    <div
      className={classnames(classes.root, 'mainContainer')}
    >
      <div
        className={classnames('numberContainer')}
      >
        <div
          className={classnames('numberDisplay')}
        >
          <ArrowDropDown
            className={classnames('arror-icon')}
          />
          <p>
            {numberDisplay}
          </p>
        </div>
      </div>
      <AreaChart
        width={100}
        height={30}
        data={data}
        margin={{
          top: 5, right: 0, left: 0, bottom: 5,
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1" />
        </defs>
        <Area
          type="monotone"
          dataKey="uv"
          fill="url(#colorUv)"
        />
      </AreaChart>
    </div>
  );
};

export default TrendChart;
