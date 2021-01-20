import React from 'react';
import { useTranslation } from 'i18n';
import classnames from 'classnames';
import {
  AreaChart,
  Area,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
} from 'recharts';
import { useGetStyles } from './styles';
import { data } from './utils';

const Last7Days = () => {
  const { t } = useTranslation(['accounts', 'activities']);
  const { classes } = useGetStyles();

  return (
    <AreaChart
      className={classnames(classes.root)}
      width={100}
      height={30}
      data={data}
    >
      {/* <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1"> */}
          {/* <stop offset="5%" stopColor="#ffffff" stopOpacity={0.6} /> */}
          {/* <stop offset="95%" stopColor="#ffffff" stopOpacity={0.0} /> */}
        {/* </linearGradient>
      </defs> */}
      <Area
        stroke="green"
        type="monotone"
        dataKey="uv"
        fill="url(#colorUv)"
      />
    </AreaChart>
    // <LineChart width={600} height={300} data={data}
    //   margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
    //   <XAxis dataKey="name" />
    //   <YAxis />
    //   <CartesianGrid strokeDasharray="3 3" />
    //   <Tooltip />
    //   <Legend />
    //   <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
    //   <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    // </LineChart>
  );
};

export default Last7Days;
