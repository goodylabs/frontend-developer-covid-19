import React from 'react';
import {Card, CardContent, Typography, Grid, CardHeader} from "@material-ui/core";
import CountUp from "react-countup";
import cx from 'classnames';

import styles from './Cards.module.css'

const Cards = ({Data: {Countries}, country}) =>{
    let result = Countries.find(obj => {
        return obj.Country === country;
    })
        return (
            result.NewConfirmed!==undefined ?(
            <div className={styles.container}>
                <Grid container spacing={3} justify="center">
                    <Grid item component={Card} xs={2} md={3} className={cx(styles.Confirmed, styles.card)}>
                        <CardContent>
                            <CardHeader variant="h5" color="primary"  gutterBottom title='Confirmations' className={styles.Header}/>
                            <Typography color="textSecondary" gutterBottom>New confirmations</Typography>
                            <Typography variant="h5">
                                <CountUp start={0} end={result.NewConfirmed} duration={1} separator=","/>
                            </Typography>
                            <Typography color="textSecondary">of total: {result.TotalConfirmed}</Typography>
                            <Typography variant="body2">Number of confirmed cases of COVID-19</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} md={3} className={cx(styles.Deaths, styles.card)}>
                        <CardContent>
                            <CardHeader variant="h5" color="textPrimary" gutterBottom title='Deaths' className={styles.Header}/>
                            <Typography color="textSecondary" gutterBottom>New Deaths</Typography>
                            <Typography variant="h5">
                                <CountUp start={0} end={result.NewDeaths} duration={1} separator=","/>
                            </Typography>
                            <Typography color="textSecondary">of total: {result.TotalDeaths}</Typography>
                            <Typography variant="body2">Death cases caused by COVID-19</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} md={3} className={cx(styles.Recovered, styles.card)}>
                        <CardContent>
                            <CardHeader variant="h5" color="textPrimary" gutterBottom title='Recoveries' className={styles.Header}/>
                            <Typography color="textSecondary" gutterBottom>New Recovered</Typography>
                            <Typography variant="h5">
                                <CountUp start={0} end={result.NewRecovered} duration={1} separator=","/>
                            </Typography>
                            <Typography color="textSecondary">of total: {result.TotalRecovered}</Typography>
                            <Typography variant="body2">Number of recovered cases from COVID-19</Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </div>) : <p>Sorry we dont have any info about this country</p>
        );
}




export default Cards;