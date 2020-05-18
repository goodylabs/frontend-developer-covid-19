import React  from 'react'
import PropTypes from 'prop-types'
import BarChart from 'containers/ChartElements/BarChart/BarChart'
import LineChart from 'containers/ChartElements/LineChart/LineChart'
import styles from './Charts.module.css'

const Chart = ({ chart }) => (
  <div className='wrapper'>
    <div className={ styles.Char }>
      { chart === 'line'
        ? <LineChart />
        : <BarChart />
      }
    </div>
  </div>
)

Chart.propTypes = {
  chart: PropTypes.string
}

Chart.defaultProps = {
  chart: 'bar'
}

export default Chart
