import mapboxgl, { Map } from 'mapbox-gl'
import { Country } from '../types/globalStats'

export const generateMarkers = (map: Map, stats: Country[]): void => {
  stats.forEach((val) => {
    const marker = document.createElement('div')
    marker.innerHTML = val.TotalConfirmed.toString()
    marker.classList.add('marker')
    if (val.TotalConfirmed >= 100000) marker.classList.add('bigger')
    else if (val.TotalConfirmed < 1000) marker.classList.add('smaller')
    new mapboxgl.Marker(marker).setLngLat([val.Lng, val.Lat]).addTo(map)
  })
}
