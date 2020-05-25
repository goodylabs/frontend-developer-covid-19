import React from 'react';
import SearchCountryItem from './SearchCountryItem.js';


class SearchCountries extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			countries: [],
			filtered: []
		}
	}


	componentDidMount() {
		this.setState({
	        countries: this.props.countries,
	        filtered: this.props.countries
	    });
	}


	componentDidUpdate(previousProps, previousState) {
	    if (previousProps.countries !== this.props.countries) {
	        this.setState({
	        	countries: this.props.countries,
	        	filtered: this.props.countries
	        });
	    }
	}


	render(){
		return(
			<div> 
				<input onInput = {this.onInputHandler} className="form-control" style={{borderRadius: '8px', marginBottom: '16px'}} placeholder="Search country..."/>
				{this.state.filtered.map( (country) => <SearchCountryItem  key={country.Country} count={country.TotalConfirmed} name={country.Country} /> )}
			</div>
		);
	}


	onInputHandler = (e) => {
		const text = e.currentTarget.value;
		const filteredCountries = this.filter(text);
		this.setState({
			filtered: filteredCountries
		});
	}


	filter(text){
		return this.state.countries.filter(country => country.Country.toLowerCase().includes(text.toLowerCase()));
	}
}
export default SearchCountries;