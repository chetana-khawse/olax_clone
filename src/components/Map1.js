
import React, { useRef, useEffect , useState,useCallback} from 'react';
import mapboxgl from 'mapbox-gl'; 
 import MapboxAutocomplete from "react-mapbox-autocomplete";
 import 'mapbox-gl/dist/mapbox-gl.css';


const mapAccess = {
  // Thanks to SomeSoftwareTeam (https://github.com/SomeSoftwareTeam/some-react-app/blob/acd17860b8b1f51edefa4e18486cc1fb07afff70/src/components/SomeComponent.js)
  mapboxApiAccessToken:
    "pk.eyJ1IjoiY2hldGFuYS1raGF3c2UiLCJhIjoiY2xqM3NkaGxkMG92MzNwbzB6cTZranZ5diJ9.HmEUfEtrfUhGUPw6d0p4jQ"
};



mapboxgl.accessToken = 'pk.eyJ1IjoiY2hldGFuYS1raGF3c2UiLCJhIjoiY2xqM3NkaGxkMG92MzNwbzB6cTZranZ5diJ9.HmEUfEtrfUhGUPw6d0p4jQ';
 
function Map1() {
const mapContainer = useRef(null);
const map = useRef(null);
const[pickup,setPickup]=useState([]);
const[dropoff,setDropoff]=useState([]);


 const pickupCordinates=useCallback((result,lat,long)=>{ 
  console.log(result,lat,long)
  pickup.push({"lng":long,"lat":lat})
  setPickup(...pickup)
  console.log(pickup)
 })
 const dropoffCordinates=useCallback((result,lat,long)=>{
  console.log(result,lat,long)
  dropoff.push({"lng":long,"lat":lat})

  setDropoff(...dropoff)

 })






useEffect(() => {
  if (map.current) return; // initialize map only once
  map.current = new mapboxgl.Map({
  container: mapContainer.current,
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [79, 21],
  zoom: 8
  });
  addToMap(map.current)

  
    

    
//      map.current.on('load', function() {
//     map.current.addSource('route', {
//         'type': 'geojson',
//         'data': {
//             'type': 'Feature',
//             'properties': {},
//             'geometry': {
//                 'type': 'LineString',
//                 'coordinates': [
//                     [79,21],

//                     [78.6022,20.7453]
//                 ]
//             }
//         }
//     });
//     map.current.addLayer({
//         'id': 'route',
//         'type': 'line',
//         'source': 'route',
//         'layout': {
//             'line-join': 'round',
//             'line-cap': 'round'
//         },
//         'paint': {
//             'line-color': '#888',
//             'line-width': 8
//         }
//     });
// });
const start=pickup;

async function getRoute(end) {
  
 const start=[79,21];
  const query = await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/cycling/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
    { method: 'GET' }
  );
  const json = await query.json();
  const data = json.routes[0];
  const route = data.geometry.coordinates;
  const geojson = {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'LineString',
      coordinates: route
    }
  };
  // if the route already exists on the map, we'll reset it using setData
  if (map.current.getSource('route')) {
    map.current.getSource('route').setData(geojson);
  }
  // otherwise, we'll make a new request
  else {
    map.current.addLayer({
      id: 'route',
      type: 'line',
      source: {
        type: 'geojson',
        data: geojson
      },
      layout: {
        'line-join': 'round',
        'line-cap': 'round'
      },
      paint: {
        'line-color': '#3887be',
        'line-width': 5,
        'line-opacity': 0.75
      }
    });
  }
  // add turn instructions here at the end
}

map.current.on('load', () => {
  // make an initial directions request that
  // starts and ends at the same location
  getRoute(start);

  // Add starting point to the map
  map.current.addLayer({
    id: 'point',
    type: 'circle',
    source: {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Point',
              coordinates: start
            }
          }
        ]
      }
    },
    paint: {
      'circle-radius': 10,
      'circle-color': '#3887be'
    }
  });
  // this is where the code from the next step will go
});
map.current.on('click', (event) => {
  const coords = Object.keys(event.lngLat).map((key) => event.lngLat[key]);
  const end = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Point',
          coordinates: coords
        }
      }
    ]
  };
  if (map.current.getLayer('end')) {
    map.current.getSource('end').setData(end);
  } else {
    map.current.addLayer({
      id: 'end',
      type: 'circle',
      source: {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'Point',
                coordinates: coords
              }
            }
          ]
        }
      },
      paint: {
        'circle-radius': 10,
        'circle-color': '#f30'
      }
    });
  }
  getRoute(coords);
  console.log(coords)
});
    
  },[pickupCordinates,dropoffCordinates]);
    

  const addToMap=()=>{
    const marker1 = new mapboxgl.Marker()
    .setLngLat([79,21])
    .addTo(map.current);
  }

   
 


    



  return (
    <>
    <div style={{ border:"1px  groove grey",
                  minHeight:"10vh",padding:"5px",borderRadius:"3px 3px"
                 }}> 
                
                 
                   <MapboxAutocomplete
          publicKey={mapAccess.mapboxApiAccessToken}
          inputClass="form-control search"
          onSuggestionSelect={ pickupCordinates} 
          country="in" 
          resetSearch={false}
          placeholder="&#x26B2;   Start location" />
         
         <MapboxAutocomplete
          publicKey={mapAccess.mapboxApiAccessToken}
          inputClass="form-control search"
          onSuggestionSelect={dropoffCordinates}
          country="in" 
          resetSearch={false}
          placeholder=" &#x2192;   End location" /> 
 </div>

                
     <div ref={mapContainer} className="map-container" style={{width:"30vhpx" , minHeight:"30vh",border:"1px groove grey"}} />
                </>
  )
}

export default Map1