import {
  FETCH_GLOBAL_DATA,
  FETCH_ERROR,
  FetchActionTypes,
} from '../types/actions'
import { GlobalStats } from '../types/globalStats'

const initState: GlobalStats = {
  globalStats: {
    NewConfirmed: 0,
    TotalConfirmed: 0,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0,
  },
  countries: [],
  error: false,
  alreadyFetched: false,
}

export default function globalStats(
  global = initState,
  action: FetchActionTypes
): GlobalStats {
  switch (action.type) {
    case FETCH_GLOBAL_DATA:
      return {
        globalStats: action.payload.Global,
        countries: action.payload.Countries,
        error: false,
        alreadyFetched: true,
      }
    case FETCH_ERROR:
      return { ...global, error: true, alreadyFetched: false }
    default:
      return global
  }
}
