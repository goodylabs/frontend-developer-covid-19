export interface GlobalStats {
  globalStats: Global
  countries: Country[]
  error: boolean
  alreadyFetched: boolean
}

export interface Global {
  NewConfirmed: number
  TotalConfirmed: number
  NewDeaths: number
  TotalDeaths: number
  NewRecovered: number
  TotalRecovered: number
}

export interface Country {
  Country: string
  CountryCode: string
  Slug: string
  NewConfirmed: number
  TotalConfirmed: number
  NewDeaths: number
  TotalDeaths: number
  NewRecovered: number
  TotalRecovered: number
  Date: string
  Lat: number
  Lng: number
  PlName: string
}
