import React from 'react';
import PropTypes from 'prop-types';
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';

import Heading from '../../Heading';
import formatValue from '../../../utils';
import messages from './messages';
import { Colors } from '../../../constants';

const BarChart = ({ globalData }) => {
  const data = [
    { name: 'Total confirmed', amount: `${globalData.TotalConfirmed}`, color: Colors.yellow },
    { name: 'Total deaths', amount: `${globalData.TotalDeaths}`, color: Colors.red },
    { name: 'Total recovered', amount: `${globalData.TotalRecovered}`, color: Colors.green },
  ];

  return (
    <>
      <Heading>{messages.heading}</Heading>
      <ResponsiveContainer width="100%" height={600}>
        <RechartsBarChart data={data} margin={{ top: 60, right: 80, left: 80, bottom: 60 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip cursor={{ fill: 'none' }} formatter={(value) => formatValue`${value}`} />
          <Bar barSize={250} dataKey="amount" fill="royalblue">
            {data.map((_entry, index) => (
              <Cell key={`cell-${_entry}`} fill={data[index].color} />
            ))}
          </Bar>
        </RechartsBarChart>
      </ResponsiveContainer>
    </>
  );
};

BarChart.propTypes = {
  globalData: PropTypes.shape({
    TotalConfirmed: PropTypes.number,
    TotalDeaths: PropTypes.number,
    TotalRecovered: PropTypes.number,
  }),
};

BarChart.defaultProps = {
  globalData: null,
};
export default BarChart;
