import React from 'react';
import numeral from 'numeral';
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useTranslation } from 'i18n';
import classnames from 'classnames';
import { useGetStyles } from './styles';
import { useOnlineVotingPowerHook } from './hooks';
import { linearGradient } from './utils';
import { CustomToolTip } from './components';

const OnlineVotingPower = () => {
  const { t } = useTranslation('home');
  const { classes } = useGetStyles();
  const {
    onlineVotingPower,
    cartesianGridStroke,
  } = useOnlineVotingPowerHook();

  return (
    <div className={classnames(classes.root)}>
      <h3>{t('onlineVotingPower')}</h3>
      <div className="chart">
        <ResponsiveContainer>
          <LineChart
            data={onlineVotingPower}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0%" y1="0%" x2="100%" y2="0%">
                {
                linearGradient.map((x) => {
                  return (
                    <stop offset={`${x.offset}%`} stopColor={x.color} key={x.offset} />
                  );
                })
              }
              </linearGradient>
            </defs>
            <CartesianGrid stroke={cartesianGridStroke} />
            <XAxis
              // tick={false}
              dataKey="height"
              tickSize={0}
              dy={20}
              height={50}
              tickFormatter={(tick) => {
                return numeral(tick).format('0,0');
              }}
            />
            <YAxis
              dataKey="votingPower"
              dx={-10}
              tickSize={0}
              width={30}
              tickFormatter={(tick) => {
                return numeral(tick).format('0,0a');
              }}
            />
            <ZAxis />
            <Tooltip
              cursor={false}
              content={<CustomToolTip />}
            />
            <Line
              isAnimationActive={false}
              type="monotone"
              dataKey="votingPower"
              stroke="url(#colorUv)"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default OnlineVotingPower;
