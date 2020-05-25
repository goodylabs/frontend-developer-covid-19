import React from 'react';


export function CountryStatsDeaths({data}){
	return(
		<div className="card bg-dark" style={{margin: '8px'}}>
			<div className="card-body" style={{height: '80vh', overflow: 'auto'}}>
				{data.map( (country,id) => <p key={id}><span className="text-danger"> {country.TotalDeaths} </span> {country.Country} </p> )}
			</div>
		</div>
	);
}
