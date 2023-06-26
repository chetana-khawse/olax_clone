import React, { useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'; 
mapboxgl.accessToken = 'pk.eyJ1IjoiY2hldGFuYS1raGF3c2UiLCJhIjoiY2xqM3NkaGxkMG92MzNwbzB6cTZranZ5diJ9.HmEUfEtrfUhGUPw6d0p4jQ';

const View =()=>
{    const [pick,setPick]=useState();
     const [drop,setDrop]=useState();
    
    useEffect(()=>{
    const map = new mapboxgl.Map({
        container: 'map',
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [79, 21],
        zoom: 9
        });

        pickupCordinates();
        dropoffCordinates();
    });
    
    const addToMap=(map)=>{
        const marker1 = new mapboxgl.Marker()
        .setLngLat([79,21])
        .addTo(map);
    }
    const pickupCordinates=()=>{
        const pickup="nagpur";
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
            access_token:'pk.eyJ1IjoiY2hldGFuYS1raGF3c2UiLCJhIjoiY2xqM3NkaGxkMG92MzNwbzB6cTZranZ5diJ9.HmEUfEtrfUhGUPw6d0p4jQ'})
        )
        .then(response=>response.json())
        .then(data=>{console.log(data.features[0].center)})
    }
    const dropoffCordinates=()=>{
        const dropoff="amravati";
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
            access_token:'pk.eyJ1IjoiY2hldGFuYS1raGF3c2UiLCJhIjoiY2xqM3NkaGxkMG92MzNwbzB6cTZranZ5diJ9.HmEUfEtrfUhGUPw6d0p4jQ'})
        )
        .then(response=>response.json())
        .then(data=>{console.log(data.features[0].center)})
    }



  return (
    <div style={{height:"300px"}}>
        {/* <input type='text' onClick={pickupCordinates}/> */}
        {/* <input type='text' onChange={dropoffCordinates}/> */}
<div id="map" style={{ minHeight:"300px"}}></div>

    </div>
  )
}

export default View