import { Global, Country } from './globalStats'
import { CountryDetails } from './details'

export const FETCH_GLOBAL_DATA = 'fetch_global_data'
export const FETCH_ERROR = 'fetch_error'

export interface FetchGlobalDataAction {
  type: typeof FETCH_GLOBAL_DATA
  payload: { Global: Global; Countries: Country[] }
}

export interface FetchErrorAction {
  type: typeof FETCH_ERROR
}

export type FetchActionTypes = FetchGlobalDataAction | FetchErrorAction

export const FETCH_DETAILS = 'fetch_details'
export const FETCH_DETAILS_ERROR = 'fetch_details_error'

export interface FetchDetailsAction {
  type: typeof FETCH_DETAILS
  payload: CountryDetails[]
}

export interface FetchDetailsErrorAction {
  type: typeof FETCH_DETAILS_ERROR
}

export type FetchDetailsActions = FetchDetailsAction | FetchDetailsErrorAction

export type ActionTypes = FetchActionTypes | FetchDetailsActions
