import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';
import { useGetStyles } from './styles';

const Potential = () => {
  const { classes } = useGetStyles();
  const data = [
    {
      subject: 'Math', A: 120, B: 110, fullMark: 150,
    },
    {
      subject: 'Chinese', A: 98, B: 130, fullMark: 150,
    },
    {
      subject: 'English', A: 86, B: 130, fullMark: 150,
    },
    {
      subject: 'Geography', A: 99, B: 100, fullMark: 150,
    },
    {
      subject: 'Physics', A: 85, B: 90, fullMark: 150,
    },
    {
      subject: 'History', A: 65, B: 85, fullMark: 150,
    },
  ];

  return (
    <div className={classes.root}>
      <h3>Potential</h3>
      <div className="chart">
        <ResponsiveContainer width="99%">
          <RadarChart data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <Radar
              name="Mike"
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
