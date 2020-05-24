import globalStats from './globalStats.reducer'
import details from './detailStats.reducer'

import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

const rootReducer = combineReducers({
  globalStats: globalStats,
  details: details,
})

export type AppState = ReturnType<typeof rootReducer>
export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector

export const store = createStore(rootReducer, applyMiddleware(thunk))
