import React from 'react';


export function Card({name, count, color}){
	let countWithSpaces;
	if(typeof count !== 'undefined'){
		countWithSpaces = count.toLocaleString();
	}
	let h2color = "card-text " + color;
	return(
		<div className="card bg-dark" style={{margin: '8px'}}>
		  <div className="card-body">
		    <h5 className="card-title" style={{textAlign: 'center'}}>{name}</h5>
		    <h2 className={h2color} style={{textAlign: 'center'}}>{countWithSpaces}</h2>
		  </div>
		</div>
	);
}