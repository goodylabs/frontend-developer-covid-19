import React, {useState, useEffect} from 'react';
import styles from './CountryList.module.css';
import {Card, CardContent, Typography, Grid, InputLabel, Input, FormHelperText} from '@material-ui/core'
import {fetchCountries} from '../../api';
import { FormControl} from '@material-ui/core';

const CountryList = ( handleCountryChange ) =>{
    const[fetchedCountries, setFetchedCountries] = useState([]);
    const[searchCountry, setSearchCountry] = useState("");

   useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries())
        }
        fetchAPI();
   }, [setFetchedCountries])

<<<<<<< HEAD
const filterCountry = fetchedCountries.filter(item=> {
    return searchCountry !== "" ? item.Country.includes(searchCountry) : item;
   
})

    return (
    <div className={styles.container}>
   
    <FormControl>
      <InputLabel htmlFor="my-input">Wyszukaj</InputLabel>
      <Input id="my-input" aria-describedby="my-helper-text" onChange={e=>setSearchCountry(e.target.value)}/>
      <FormHelperText id="my-helper-text">Wpisz pańswto, aby wyszukać</FormHelperText>
    </FormControl>
    
        <br/><br/><br/>
=======
    const filterCountry = fetchedCountries.filter(item=> {
    return searchCountry != "" ? item.Country.includes(searchCountry) : item;
    })

    return (
    <div className={styles.container}>

    <FormControl>
        <InputLabel htmlFor="my-input">Wyszukaj</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" onChange={e=>setSearchCountry(e.target.value)}/>
        <FormHelperText id="my-helper-text">Wpisz pańswto, aby wyszukać</FormHelperText>
    </FormControl>
    <br/><br/><br/>
>>>>>>> bb96cf37f982f8ae9a31130b8ac4894232d982b5
        <Grid container spacing={2} justify="center">
        
            {filterCountry.map((country,i) => <CardContent item component={Card} key={i} className={styles.typo}> 
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