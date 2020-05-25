// import React, {useEffect,useState} from 'react';
// import { Card, CardContent, Typography, Grid } from '@material-ui/core';
// import styles from './App.module.css';
// import axios from 'axios';

// const AppCountry = () => {
 
//     const [latest, setLatest] = useState("")
 
//     useEffect(() => {
//     axios .all([
//         axios.get("https://api.covid19api.com/summary")
//     ])
//         .then(responseArr => {
//         setLatest(responseArr[0].data);
//         console.log(responseArr[0].data)
//       })
//       .catch(err => {
//         console.log(err)
//       })
//   }, [])

//   const countries = latest.map(data => {
//       return (
//           <div>
//               {/* <h4>{data.Date}</h4> */}
//           </div>
//       )
//   })

//     return (
//         {countries}
//     )
// }
// export default AppCountry;