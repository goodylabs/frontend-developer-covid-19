import { LOADING_ON, LOADING_OFF, SET_ALERT, UNSET_ALERT } from "store/actions/appAction"

const initialState = {
  loading: false,
  alert: {
    status: false,
    message: ''
  }
}

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_ON:
    case LOADING_OFF:
      return { ...state, loading: payload }

    case SET_ALERT:
    case UNSET_ALERT:
      return { ...state, alert: payload }

    default:
      return state
  }
}

export default appReducer