import React from 'react';
import { Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({ data: { confirmed, recovered, deaths } }) => {
  return (
    <div className={styles.container}>
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: [
                'rgba(0, 0, 255, 0.5)',
                'rgba(0, 255, 0, 0.5)',
                'rgba(255, 0, 0, 0.5)'
              ],
              data: [confirmed, recovered, deaths]
            }
          ]
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: 'Current global state' }
        }}
      />
    </div>
  );
};

export default Chart;
