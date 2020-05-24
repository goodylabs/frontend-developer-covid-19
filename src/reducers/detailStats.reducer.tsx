import { DetailStatistics } from '../types/details'
import {
  FETCH_DETAILS,
  FetchDetailsActions,
  FETCH_DETAILS_ERROR,
} from '../types/actions'

const initialState: DetailStatistics = {
  error: false,
  countryDetails: [],
}

export default function detailStats(
  details = initialState,
  action: FetchDetailsActions
) {
  switch (action.type) {
    case FETCH_DETAILS:
      return { countryDetails: [...action.payload], error: false }
    case FETCH_DETAILS_ERROR:
      return { countryDetails: [], error: true }
    default:
      return details
  }
}
