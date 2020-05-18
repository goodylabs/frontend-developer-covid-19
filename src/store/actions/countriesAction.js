const SET_GLOBAL_DATA = 'SET_GLOBAL_DATA'
const SET_CURRENT_DATA = 'SET_CURRENT_DATA'

const setGlobalData = data => ({
  type: SET_GLOBAL_DATA,
  payload: data
})

const setCurrentData = data => ({
  type: SET_CURRENT_DATA,
  payload: data
})

export {
  SET_GLOBAL_DATA,
  SET_CURRENT_DATA,
  setGlobalData,
  setCurrentData
}