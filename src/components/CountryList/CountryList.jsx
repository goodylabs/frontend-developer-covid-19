import React, {useState, useEffect} from 'react';
import styles from './CountryList.module.css';
import {Card, CardContent, Typography, Grid} from '@material-ui/core'
import {fetchCountries} from '../../api';
import {NativeSelect, FormControl} from '@material-ui/core';

const CountryList = ( handleCountryChange ) =>{
    const[fetchedCountries, setFetchedCountries] = useState([]);

   useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries())
        }
        fetchAPI();
   }, [setFetchedCountries])


    return (
    <div className={styles.container}>
        <Grid container spacing={2} justify="center">
        
            {fetchedCountries.map((country,i) => <CardContent item component={Card} key={i} className={styles.typo}> 
            <Typography> {country.CountryCode} </Typography>
                <Typography variant="h5" className={styles.typo}>
                    {country.Country}
                </Typography>
                Statystyka ogólna:
            <div className={styles.datacards}>    
                <div className={styles.infected}>{country.TotalConfirmed}</div>
                <div className={styles.recovered}>{country.TotalRecovered}</div>
                <div className={styles.deaths}>{country.TotalDeaths}</div>
            </div><p>----------------</p>
           Dane dzienne:
            <div className={styles.datadailycards}>    
                <div className={styles.dailyinfected}>{country.NewConfirmed}</div>
                <div className={styles.dailyrecovered}>{country.NewRecovered}</div>
                <div className={styles.dailydeaths}>{country.NewDeaths}</div>
            </div><p>----------------</p>
            <p>Data aktualizacji:</p>
            <p>{country.Date}</p>
            </CardContent>)}
    
        </Grid>
    </div>
           
 
    )
}
export default CountryList;