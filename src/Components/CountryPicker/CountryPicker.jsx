import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from "@material-ui/core";

import styles from './CountryPicker.module.css';

import {countries} from "../../Api/APIUtil";

const CountryPicker = ({handleCountryChange}) =>{
    const [fetchCountries, setFetchCountries] = useState([])

   useEffect(() => {
        const fetchedCountries = async () => {
            setFetchCountries(await countries());
        }
        fetchedCountries();
    },[setFetchCountries]);



    return(
        <FormControl margin={"dense"} className={styles.container}>
            <NativeSelect defaultValue=" " onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value=''>Please choose a country</option>
                {fetchCountries.map(({Country},i) =><option key='id' value={Country}>{Country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;