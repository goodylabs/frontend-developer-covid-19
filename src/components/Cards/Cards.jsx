import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core';
import CardElement from './Card/CardElement';
import styles from './Cards.module.css'

const Cards = ({ current, updatedDate }) => {
  const { TotalConfirmed = 0, TotalRecovered = 0, TotalDeaths = 0 } = current
  
  const cards = [
    { total: TotalConfirmed, style: 'infected', title: 'Infected', text: 'Number of active cases of COVID-19' },
    { total: TotalRecovered, style: 'recovered', title: 'Recovered', text: 'Number of recovereis from COVID-19' },
    { total: TotalDeaths, style: 'deaths', title: 'Deaths', text: 'Number of deaths caused by COVID-19' }
  ]

  return (   
    <div className={ `wrapper ${ styles.container }` }>
      <Grid container spacing={ 3 } justify="center">
        { cards.map((card, index) => <CardElement key={ index } card={ card } updatedDate={ updatedDate } />) }
      </Grid>
    </div>
  )
}

Cards.propTypes = {
  current: PropTypes.object,
  updatedDate: PropTypes.string
}

Cards.defaultProps = {
  current: {},
  updatedDate: ''
}

export default Cards
