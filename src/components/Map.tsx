import React, { useRef, useEffect, useState } from 'react'

import mapboxgl, { Map } from 'mapbox-gl'
import '../styles/map.style.css'
import { generateMarkers } from '../utils/generateMarkers'
import { Country } from '../types/globalStats'

mapboxgl.accessToken =
  'pk.eyJ1IjoiYXJla3JndyIsImEiOiJjano2eDFsYTAwNGUwM2huM2RwamtwZHNtIn0.LM0WuXJEdyGA_dhGDHnHQw'

interface CovidMapProps {
  countryStats: Country[]
}

const CovidMap = ({ countryStats }: CovidMapProps) => {
  const mapDiv = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<Map>()

  const applyOffset = (): boolean => (window.innerWidth >= 910 ? true : false)

  useEffect(() => {
    setMap(
      new mapboxgl.Map({
        container: mapDiv.current || '',
        style: 'mapbox://styles/arekrgw/ckafnp3cy06541isf5lu2o18g',
        center: [25.18, 54.54],
        zoom: 3,
        minZoom: 3,
      })
    )
    //Set markers
  }, [])
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      map &&
        map.flyTo({
          center: [
            applyOffset()
              ? position.coords.longitude - 20
              : position.coords.longitude,
            position.coords.latitude,
          ],
          zoom: 3,
          speed: 1,
        })
    })
  }, [map])

  useEffect(() => {
    map && generateMarkers(map, countryStats)
  }, [countryStats, map])

  return <div id="mapid" ref={mapDiv}></div>
}

export default CovidMap
