import mapboxgl from "mapbox-gl";

import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect, useRef } from "react"

const Map = () => {
    const mapRef = useRef<mapboxgl.Map | null>(null)
    const mapContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiZW1hbnVlbGd1c3RhZnpvbiIsImEiOiJja294YndvNm8wZXBmMnBtcGFkZ3I5N3V6In0.t_4FKgw6kJSPGD4LleGWqQ'
        mapRef.current = new mapboxgl.Map({
          container: mapContainerRef.current as HTMLElement,
          center: [12.0542, 57.6941],
          zoom: 10.12
        });
        new mapboxgl.Marker({ color: '#6366F1',})
            .setLngLat([11.9842, 57.7141])
            .addTo(mapRef.current);

        new mapboxgl.Marker({ color: '#6366F1',})
            .setLngLat([11.9642, 57.6841])
            .addTo(mapRef.current);
    
        return () => {
          if (mapRef.current) mapRef.current.remove()
        }
      }, [])


  return (
    <>
        <div ref={mapContainerRef} id="map" style={{ width: "100%", height: "400px" }}></div>
    </>
  )
}

export default Map