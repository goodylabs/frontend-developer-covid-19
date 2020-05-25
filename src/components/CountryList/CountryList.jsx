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


   //const countries = fetchedCountries.map(Country => {return ( {Country}  ) })
    
  // const nameOfCountry = Countries.map((country) => country.Country)
    return (

          <Grid className={styles.FormControl}>
            <CardContent>
              
                    {fetchedCountries.map((country,i) => <CardContent item component={Card} key={i}> 
                     {country} 
                    </CardContent>)}
                
            </CardContent>
        </Grid>
     
           
            // <FormControl className={styles.FormControl}>
        //     <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        //         <option value = "Global"> Global </option>
        //         {fetchedCountries.map((country,i) => <option key={i} value={country}> {country} </option>)}
        //     </NativeSelect>
        // </FormControl>
        

 
    )
}
export default CountryList;