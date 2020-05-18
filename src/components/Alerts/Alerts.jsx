import React from 'react'
import { Alert, AlertTitle } from '@material-ui/lab'
import styles from './Alerts.module.css'

const Alerts = ({ alertMessage }) => (
  <div className={ styles.AlertWrapper }>
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      This is an error alert — <strong>{ alertMessage }</strong>
    </Alert>
  </div>
)

export default Alerts
