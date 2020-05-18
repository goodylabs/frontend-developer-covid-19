import React from 'react'
import { useSelector } from 'react-redux';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
  const { current } = useSelector(({ countries }) => countries)
  const { TotalConfirmed = 0, TotalRecovered = 0, TotalDeaths = 0 , Country= 'World' } = current
  
  return (
    <Bar data={{
      labels: ['Infected','Recovered','Deaths'],
      datasets: [{
        label:'People',
        backgroundColor:['rgba(0, 0, 255, 0.5)','rgba(0, 255, 0, 0.5)','rgba(255, 0, 0, 0.5)'],
        data:[TotalConfirmed, TotalRecovered, TotalDeaths]
      }],
    }} options={{
      legend:{display:false},
      title: {display:true, text:`Current state in ${Country}`}
    }} />
  )
}

export default BarChart
