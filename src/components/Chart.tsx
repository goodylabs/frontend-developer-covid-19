import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import '../styles/chart.style.css'
import { CountryDetails } from '../types/details'

interface ChartProps {
  details: CountryDetails[]
}

const Chart = ({ details }: ChartProps) => {
  const generateData = () => {
    return details
      .filter((value) => {
        if (value.Confirmed !== 0 || value.Deaths !== 0 || value.Recovered) {
          return true
        } else return false
      })
      .map((value) => {
        const d = new Date(value.Date)
        return {
          name: `${d.getDate().toString().padStart(2, '0')}.${(d.getMonth() + 1)
            .toString()
            .padStart(2, '0')}.${d.getFullYear()}`,
          Zakażenia: value.Confirmed,
          Śmierci: value.Deaths,
          Wyzdrowienia: value.Recovered,
        }
      })
  }

  return (
    <div className="chart-container">
      <ResponsiveContainer>
        <BarChart data={generateData()} barGap={0}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Zakażenia" fill="#ff0000" />
          <Bar dataKey="Śmierci" fill="#000000" />
          <Bar dataKey="Wyzdrowienia" fill="#038a27" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
