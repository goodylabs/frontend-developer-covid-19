import React from 'react'
import { Line } from 'react-chartjs-2'
import { useSelector } from 'react-redux'
import { Typography, Box } from '@material-ui/core'

const LineChart = () => {
  const { timestamp } = useSelector(({ findCountry }) => findCountry)
  const timestampData = timestamp.slice(-30)

  return (
    <>
      <Box pb={ 2 }>
        <Typography variant="h5" component="h4" align="center">{ timestampData[0] ? timestampData[0].Country : 'Select Country' }</Typography>
      </Box>

      <Line data= {{
        labels: timestampData.map(({ Date: date }) => new Date(date).toDateString()),
        datasets: [
          {
            data: timestampData.map(({ Confirmed }) => Confirmed),
            label: 'Infected',
            borderColor: '#0000ff',
            backgroundColor: 'rgba(0, 0, 255, 0.2)',
            fill: true
          },
          {
            data: timestampData.map(({ Recovered }) => Recovered),
            label: 'Recovered',
            borderColor: '#00ff00',
            backgroundColor: 'rgba(0, 255, 0, 0.2)',
            fill: true
          },
          {
            data: timestampData.map(({ Deaths }) => Deaths),
            label: 'Deaths',
            borderColor: '#ff0000',
            backgroundColor: 'rgba(255, 0, 0, 0.2)',
            fill: true
          }
        ]
      }} />
    </>
  )
}

export default LineChart
