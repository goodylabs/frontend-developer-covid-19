const LOADING_ON = 'LOADING_ON'
const LOADING_OFF = 'LOADING_OFF'
const SET_ALERT = 'SET_ALERT'
const UNSET_ALERT = 'UNSET_ALERT'

const loadingOn = () => ({
  type: LOADING_ON,
  payload: true
})

const loadingOff = () => ({
  type: LOADING_OFF,
  payload: false
})

const setAlert = message => ({
  type: SET_ALERT,
  payload: { status: true, message: message }
})

const unsetAlert = () => ({
  type: UNSET_ALERT,
  payload: { status: false, message: '' }
})

export {
  LOADING_ON,
  LOADING_OFF,
  SET_ALERT,
  UNSET_ALERT,
  loadingOn,
  loadingOff,
  setAlert,
  unsetAlert
}