
import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl'; 



mapboxgl.accessToken = 'pk.eyJ1IjoiY2hldGFuYS1raGF3c2UiLCJhIjoiY2xqM3NkaGxkMG92MzNwbzB6cTZranZ5diJ9.HmEUfEtrfUhGUPw6d0p4jQ';
 

function Map1() {
  const mapContainer = useRef(null);
const map = useRef(null);

 
useEffect(() => {
if (map.current) return; // initialize map only once
map.current = new mapboxgl.Map({
container: mapContainer.current,
style: 'mapbox://styles/mapbox/streets-v12',
center: [79, 21],
zoom: 8
});
});

  return (
    <div style={{
                 minHeight:"30vh",
                border:"1px  solid grey"}}> 
                
                <div ref={mapContainer} className="map-container" style={{width:"536px" , height:"220px"}} />
              
  
                
                </div>
  )
}

export default Map1