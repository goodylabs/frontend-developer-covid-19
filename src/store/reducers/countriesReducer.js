import { SET_GLOBAL_DATA, SET_CURRENT_DATA } from "store/actions/countriesAction"

const initialState = {
  global: {},
  current: {},
  countries: [],
  updatedDate: ''
}

const countriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_GLOBAL_DATA:
      const { Global = {}, Countries = [], Date: UpdatedDate = '' } = payload
      return { ...state, global: Global, current: Global, countries: Countries, updatedDate: UpdatedDate }

    case SET_CURRENT_DATA:
      return { ...state, current: payload }

    default:
      return state
  }
}

export default countriesReducer