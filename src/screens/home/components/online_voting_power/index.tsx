import React from 'react';
import numeral from 'numeral';
import {
  ScatterChart,
  Scatter,
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
          <ScatterChart
            margin={{
              top: 20, right: 20, bottom: 20, left: 20,
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
              dataKey="height"
              tickSize={0}
              dy={20}
              height={50}
              tickFormatter={(tick) => {
                return numeral(tick).format('0,0a');
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
            <Scatter
              name="A school"
              data={onlineVotingPower}
              fill="transparent"
              lineJointType="monotoneX"
              line={{
                stroke: 'url(#colorUv)', strokeWidth: 3,
              }}
            />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default OnlineVotingPower;
