import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';
import { useGetStyles } from './styles';
import { usePotentialHook } from './hooks';

const Potential = () => {
  const { classes } = useGetStyles();
  const { gridStroke } = usePotentialHook();
  const data = [
    {
      subject: 'Math', A: 120, B: 110, fullMark: 150,
    },
    {
      subject: 'Chinese', A: 120, B: 130, fullMark: 150,
    },
    {
      subject: 'English', A: 120, B: 130, fullMark: 150,
    },
    {
      subject: 'Geography', A: 120, B: 100, fullMark: 150,
    },
    {
      subject: 'Physics', A: 85, B: 90, fullMark: 150,
    },
    {
      subject: 'History', A: 65, B: 85, fullMark: 150,
    },
  ];

  // need to format and calc you own data out of 100 (?)
  const total = data.reduce((a, b) => {
    return a + b.A;
  }, 0);
  console.log(total, 'total');

  // data.forEach((x) => {
  //   x.A = (x.A / total) * 100;
  // });

  console.log(data, 'data');
  return (
    <div className={classes.root}>
      <h3>Potential</h3>
      <div className="chart">
        <ResponsiveContainer width="99%">
          <RadarChart data={data}>
            <PolarGrid stroke={gridStroke} />
            <PolarAngleAxis dataKey="subject" />
            <Radar
              dataKey="A"
              stroke="#00A1FF"
              fill="#00BEFF"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
      <div>
        stats
      </div>
    </div>
  );
};

export default Potential;
