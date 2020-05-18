import React from 'react'
import { useSelector } from 'react-redux'
import Loader from 'components/Loader/Loader'
import Home from 'containers/Home/Home'
import Alerts from 'components/Alerts/Alerts'

const App = () => {
  const { loading, alert } = useSelector(({ app }) => app)
  const { status: alertStatus, message: alertMessage } = alert

  return (
    <>
      { loading && <Loader /> }
      { alertStatus &&  <Alerts alertMessage={alertMessage} />  }

      <Home />
    </>
  )
}

export default App