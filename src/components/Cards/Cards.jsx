import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup'

const Cards = ({data: {Global, Date}}) => {
   if(! Global) {
        return 'Loading...';
   }
   
    return (
      <div className={styles.container}>
          <Grid container spacing={3} justify="center">
            <Grid item component={Card}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Zainfekowani</Typography>
                    <Typography variant="h5">
                        <CountUp 
                            start={0}
                            end={Global.TotalConfirmed}
                            duration={2.0} //czas zliczania 2.5sec
                            separator=","
                        />
                    </Typography>
                    <Typography color="textSecondary">Dane z dnia: {Date} </Typography>
                    <Typography>Liczba aktywnych przypadków COVID-19</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Ozdrowieńcy</Typography>
                    <Typography variant="h5">REAL DATA</Typography>
                    <Typography color="textSecondary">REAL UPDATE DATE</Typography>
                    <Typography>Liczba osób, które wyzdrowiały od COVID-19</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Zgony</Typography>
                    <Typography variant="h5">REAL DATA</Typography>
                    <Typography color="textSecondary">REAL UPDATE DATE</Typography>
                    <Typography>Liczba zgonów spowodowanych COVID-19</Typography>
                </CardContent>
            </Grid>
          </Grid>
      </div>
    )
}

export default Cards;