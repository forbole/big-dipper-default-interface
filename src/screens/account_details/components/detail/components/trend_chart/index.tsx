import React from 'react';
import classnames from 'classnames';
import {
  AreaChart,
  Area,
} from 'recharts';
import { ArrowDropDown } from '@material-ui/icons';
import { useGetStyles } from './styles';
import { data } from './utils';

const TrendChart = () => {
  const { classes } = useGetStyles();
  return (
    <div
      className={classnames(classes.root, 'mainContainer')}
      // style={{
      //   display: 'flex',
      //   width: '50rem',
      // }}
    >
      <div
        className={classnames('numberContainer')}
        // style={{
        //   display: 'flex',
        //   marginRight: '0.5rem',
        //   position: 'relative',
        // }}
      >
        <div
          className={classnames('numberDisplay')}
          // style={{
          //   alignSelf: 'flex-end',
          //   display: 'flex',
          // }}
        >
          <ArrowDropDown
            className={classnames('arror-icon')}
            // style={{
            //   width: '1rem',
            //   height: '1rem',
            //   color: '#FD3B4C',
            // }}
          />
          <p
            // style={{
            //   margin: '0',
            //   fontSize: '14px',

            // }}
          >
            2.86% (24h)
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
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ffffff" stopOpacity={0.6} />
            <stop offset="95%" stopColor="#ffffff" stopOpacity={0.0} />
          </linearGradient>
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
