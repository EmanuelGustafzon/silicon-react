import mapboxgl from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect, useRef } from "react"
import useTheme from "../hooks/useTheme";

const Map = ({ width, height }: {width: string, height: string} ) => {
    const { theme } = useTheme()
    const mapRef = useRef<mapboxgl.Map | null>(null)
    const mapContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiZW1hbnVlbGd1c3RhZnpvbiIsImEiOiJja294YndvNm8wZXBmMnBtcGFkZ3I5N3V6In0.t_4FKgw6kJSPGD4LleGWqQ'
        mapRef.current = new mapboxgl.Map({
          container: mapContainerRef.current as HTMLElement,
          style: `${theme === 'light' ? "mapbox://styles/mapbox/streets-v11" : "mapbox://styles/mapbox/navigation-night-v1"}`,
          center: [-76.9902, 38.8341],
          zoom: 12.12
        });
        new mapboxgl.Marker({ color: '#6366F1',})
            .setLngLat([-76.9902, 38.8341])
            .addTo(mapRef.current);

        new mapboxgl.Marker({ color: '#6366F1',})
            .setLngLat([-76.9802, 38.8441])
            .addTo(mapRef.current);
    
        return () => {
          if (mapRef.current) mapRef.current.remove()
        }
      }, [theme])

    return (
      <>
        <div ref={mapContainerRef} id="map" style={{ width: width, height: height }}></div>
      </>
    )
}

export default Map