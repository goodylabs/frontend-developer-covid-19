import React from "react";
import { connect } from "react-redux";

import axios from "axios";
import LoadingScreen from "react-loading-screen";

import { countriesFetched } from "./actions/index";
import { NewCountryAssociativeList } from "./CountryAssociativeList";
import data from "./all.json";
// import "./style.css";

export class App extends React.Component {
    state = {
        hasData: false,
    };
    async componentDidMount() {
        try {
            const requested_data = await axios.get(
                "https://api.covid19api.com/all"
            );

            let countries = [];
            let i = 0;
            for (i = 0; i < requested_data.data.length; i++) {
                //Saving loaded data to property format
                var result = {
                    name: requested_data.data[i].Country,
                    date: requested_data.data[i].Date,
                    deaths: requested_data.data[i].Deaths,
                    recovered: requested_data.data[i].Recovered,
                    confirmed: requested_data.data[i].Confirmed,
                    active: requested_data.data[i].Active,
                    id: i,
                };
                countries.push(result);
            }

            this.props.countriesFetched(countries);
            this.setState({ hasData: true });
        } catch (error) {}
    }

    render() {
        if (this.state.hasData) {
            return (
                <div>
                    <main>
                        <NewCountryAssociativeList
                            countries={this.props.countries}
                        />
                    </main>
                </div>
            );
        } else {
            return (
                <div>
                    <main>
                        <LoadingScreen
                            loading={true}
                            bgColor="#3040a8"
                            spinnerColor="#9ee5f8"
                            textColor="#ffffff"
                            text="Loading..."
                        >
                            {" "}
                        </LoadingScreen>
                    </main>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        countries: state.countries,
    };
};
const mapDispatchToProps = { countriesFetched };

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
