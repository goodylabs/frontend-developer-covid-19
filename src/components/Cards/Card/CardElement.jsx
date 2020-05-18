import React from 'react'
import PropTypes from 'prop-types'
import CountUp from 'react-countup'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import styles from './CardElement.module.css'

const CardElement = ({ card: { total, style, title, text }, updatedDate }) => (
  <Grid item component={ Card } xs={ 12 } md={ 3 } className={ `${ styles.card } ${ styles[style] }` }>
    <CardContent>
      <Typography color="textSecondary" gutterBottom>{ title }</Typography>
      <Typography variant='h5'>
        <CountUp start={ 0 } end={ total } duration={ 2.5 } separator=',' />
      </Typography>
      <Typography color="textSecondary">{ new Date(updatedDate).toDateString() }</Typography>
      <Typography variant='body2'>{ text }</Typography>
    </CardContent>
  </Grid>
)

CardElement.propTypes = {
  card: PropTypes.shape({
    total: PropTypes.number,
    style: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
  }),
  updatedDate: PropTypes.string
}

CardElement.defaultProps = {
  card: {
    total: 0,
    style: '',
    title: '',
    text: ''
  },
  updatedDate: ''
}

export default CardElement
