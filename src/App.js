import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import { Button } from '@material-ui/core';

import { Cards, Chart, CountryPicker, CountryChart } from './components';
import { fetchData, fetchCountries, fetchCountryData } from './api/';
import { statuses } from './constants';

import styles from './App.module.css';
import image from './images/image.png';

class App extends React.Component {
  state = {
    covidData: { data: {}, status: statuses.LOADING },
    countriesData: { data: {}, status: statuses.LOADING },
    countryData: { data: [], status: statuses.LOADING }
  };

  async componentDidMount() {
    await this.loadData();
    await this.loadCountries();
    await this.loadCountryData(null);
  }

  loadData = async () => {
    this.setState((prevState) => ({
      covidData: { ...prevState.covidData, status: statuses.LOADING }
    }));

    const data = await fetchData();

    this.setState({ covidData: data });
  };

  loadCountries = async () => {
    this.setState((prevState) => ({
      countriesData: { ...prevState.countriesData, status: statuses.LOADING }
    }));

    const data = await fetchCountries();

    this.setState({ countriesData: data });
  };

  loadCountryData = async (country) => {
    this.setState((prevState) => ({
      countryData: { ...prevState.countryData, status: statuses.LOADING }
    }));

    const data = await fetchCountryData(country);

    this.setState({ countryData: data });
  };

  onCountryChange = (value) => {
    this.loadCountryData(value);
  };

  render() {
    const { covidData, countriesData, countryData } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt='COVID-19' />
        {covidData.status === statuses.LOADING && (
          <div>
            Loading...
            <CircularProgress />
          </div>
        )}
        {covidData.status === statuses.ERROR && (
          <>
            <p>Something went wrong! Press button below to load data again!</p>
            <Button variant='contained' color='primary' onClick={this.loadData}>
              Load again!
            </Button>
          </>
        )}
        {covidData.status === statuses.SUCCESS && (
          <>
            <Cards data={covidData.data} />
            <Chart data={covidData.data} />
          </>
        )}
        {countriesData.status === statuses.SUCCESS && (
          <CountryPicker
            data={countriesData.data}
            onChange={this.onCountryChange}
          />
        )}
        <CountryChart data={countryData} />
      </div>
    );
  }
}

export default App;
