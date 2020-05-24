import React from 'react';
import { Line } from 'react-chartjs-2';

import CircularProgress from '@material-ui/core/CircularProgress';

import { statuses } from '../../constants';
import styles from './CountryChart.module.css';

const CountryChart = ({ data: { data, status } }) => {
  return (
    <div className={styles.container}>
      {status !== statuses.SUCCESS && (
        <div className={styles.loader}>
          {status === statuses.LOADING && (
            <div>
              Loading...
              <CircularProgress />
            </div>
          )}
          {status === statuses.NODATA && <p>No data!</p>}
        </div>
      )}
      <Line
        data={{
          labels: data.map(({ date }) => new Date(date).toDateString()),
          datasets: [
            {
              data: data.map((data) => data.confirmed),
              label: 'Infected',
              borderColor: 'rgba(0, 0, 255, 0.5)',
              backgroundColor: 'rgba(0, 0, 255, 0.1)',
              fill: true
            },
            {
              data: data.map((data) => data.recovered),
              label: 'Recovered',
              borderColor: 'rgba(0, 255, 0, 0.5)',
              backgroundColor: 'rgba(0, 255, 0, 0.1)',
              fill: true
            },
            {
              data: data.map((data) => data.deaths),
              label: 'Deaths',
              borderColor: 'rgba(255, 0, 0, 0.5)',
              backgroundColor: 'rgba(255, 0, 0, 0.1)',
              fill: true
            }
          ]
        }}
      />
    </div>
  );
};

export default CountryChart;
