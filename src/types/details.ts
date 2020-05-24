export interface CountryDetails {
  Confirmed: number
  Recovered: number
  Deaths: number
  Date: string
}

export interface DetailStatistics {
  countryDetails: CountryDetails[]
  error: boolean
}
