import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import {
  AreaChart as RechartsAreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

import Heading from '../../Heading';
import formatValue from '../../../utils';
import { Colors } from '../../../constants';

const AreaChart = ({ singleCountry }) => (
  <>
    <Heading>{singleCountry[0].Country}</Heading>
    <ResponsiveContainer width="100%" height={600}>
      <RechartsAreaChart data={singleCountry} margin={{ top: 60, right: 80, left: 80, bottom: 60 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="Date"
          tickFormatter={(value) => dayjs(value).format('DD MMM')}
          tick={{ fontSize: 10, transform: 'translate(0, 5)' }}
          minTickGap={-5}
        />
        <YAxis />
        <Tooltip
          formatter={(value) => formatValue`${value}`}
          labelFormatter={(label) => dayjs(label).format('DD MMM')}
        />
        <Legend verticalAlign="top" height={36} iconType="rect" iconSize={30} />
        <Area type="monotone" dataKey="Confirmed" stroke={Colors.yellow} fill={Colors.yellow} />
        <Area type="monotone" dataKey="Recovered" stroke={Colors.green} fill={Colors.green} />
        <Area type="monotone" dataKey="Deaths" stroke={Colors.red} fill={Colors.red} />
      </RechartsAreaChart>
    </ResponsiveContainer>
  </>
);

AreaChart.propTypes = {
  singleCountry: PropTypes.arrayOf(PropTypes.object),
};

AreaChart.defaultProps = {
  singleCountry: [],
};

export default AreaChart;
