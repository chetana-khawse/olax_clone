
import React, { useRef, useEffect , useState} from 'react';
import mapboxgl from 'mapbox-gl'; 
 import MapboxAutocomplete from "react-mapbox-autocomplete";
 import 'mapbox-gl/dist/mapbox-gl.css';
 import axios from "axios";


const mapAccess = {
mapboxApiAccessToken:
    "pk.eyJ1IjoiY2hldGFuYS1raGF3c2UiLCJhIjoiY2xqM3NkaGxkMG92MzNwbzB6cTZranZ5diJ9.HmEUfEtrfUhGUPw6d0p4jQ"
};



mapboxgl.accessToken = 'pk.eyJ1IjoiY2hldGFuYS1raGF3c2UiLCJhIjoiY2xqM3NkaGxkMG92MzNwbzB6cTZranZ5diJ9.HmEUfEtrfUhGUPw6d0p4jQ';
 
function Map1() {
   const mapContainer = useRef(null);
   const map = useRef(null);
   let base_fare = 60;
   const [startPoint, setStartPoint] = useState();
  const [endPoint, setEndPoint] = useState();
  const [basePrice, setBasePrice] = useState();
  const [standardPrice, setStandardPrice] = useState();
  const [premiumPrice, setPremiumPrice] = useState();



  function _suggestionStartSelect(result, lat, long, text) {
    console.log(result, lat, long, text);
    setStartPoint([long, lat ])
  }

  function _suggestionEndSelect(result, lat, long, text) {
    console.log(result, lat, long, text);
    setEndPoint([long, lat])

  }

useEffect(() => {
  if (map.current) return; // initialize map only once
  map.current = new mapboxgl.Map({
  container: mapContainer.current,
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [79, 21],
  zoom: 9
  });
  
 
 map.current.on('load', () => {
  map.current.addSource('routeData', {
  'type': 'geojson',
  'data': {
  'type': 'Feature',
  'properties': {},
  'geometry': {
  'type': 'LineString',
  'coordinates': [  ] 
  }} });
  map.current.addLayer({
  'id': 'route',
  'type': 'line',
  'source': 'routeData',
  'layout': {
  'line-join': 'round',
  'line-cap': 'round'
  },
  'paint': {
  'line-color': 'grey',
  'line-width': 7
  }
  });
  });
 
  
  },[]);
  
  

function findRoute(){
                     console.log("Find route", startPoint, endPoint)
    let url = `https://api.mapbox.com/directions/v5/mapbox/cycling/${startPoint[0]},${startPoint[1]};${endPoint[0]},${endPoint[1]}?geometries=geojson&access_token=pk.eyJ1Ijoic3VtaXRwYXRpbCIsImEiOiJjazU0eXFweXowYWwyM2VrYjNjc3BhOG5nIn0.8jHA62nA33gUGnnZnwdmVQ`
     axios.get(url).then((res)=>{
             console.log("res", res.data.routes[0]["geometry"])
             map.current.flyTo({
                                center: startPoint,
                                essential: true , 
                                duration:10000,
                                zoom:11
                                             });
    let routeData = map.current.getSource("routeData").setData(res.data.routes[0]["geometry"])
    

    setBasePrice(base_fare +Math.round(parseInt(res.data.routes[0]["distance"])*0.001*5))
    setStandardPrice(base_fare + 20+ Math.round((res.data.routes[0]["distance"])*0.001*5))
    setPremiumPrice(base_fare + 40 +Math.round((res.data.routes[0]["distance"])*0.001*5))
    console.log("routeData", routeData)
  })}


   return (
    <><div style={{minWidth:"100vh",borderRadius:"18px 18px 18px 18px"}}>
      

                
<div ref={mapContainer} className="map-container" style={{width:"100vh" ,borderRadius:"8px 8px 8px 8px",boxshadow:"8px grey",position:"relative", minHeight:"100vh",border:"1px groove grey"}} >
<div className='sidebar'><div className='sidebar1'>                   
      <MapboxAutocomplete
          publicKey={mapAccess.mapboxApiAccessToken}
          inputClass="form-control search"
          onSuggestionSelect={_suggestionStartSelect} 
          country="in" className='sidebar1'
          resetSearch={false}
          placeholder="&#x25FC;   Start location" />
         
         <MapboxAutocomplete
          publicKey={mapAccess.mapboxApiAccessToken}
          inputClass="form-control search" className='sidebar1'
          onSuggestionSelect={_suggestionEndSelect}
          country="in" 
          resetSearch={false}
          placeholder=" &#x25FC;   End location" /> 
            
<button onClick={()=>{
                       findRoute();}} 
                        style={{ marginLeft:"260px",backgroundColor:"black",fontSize:"20px",
                           color:"white", border:" 2px groove grey",padding:"8px",width:"200px",borderRadius:"17px"}}
                        > Confirm Route</button>
</div></div>


<div className='a' style={{display:"grid",gridTemplateColumns:"auto auto auto"}}>
<div className='a1'
style={{ 
        fontSize: "30px",width:"260px",margin: "2px",boxShadow: "5px 5px 5px 5px grey",
        textAlign: "center",minHeight:"20vh",fontFamily:"verdana bold",textDecoration:"underline"}}
        >Micro<br/>
        <br/>₹{basePrice}</div>
  <div  className='a1'
  style={{ 
        fontSize: "30px",width:"260px",margin: "2px",boxShadow: "5px 5px 5px 5px grey",textDecoration:"underline",
        textAlign: "center",minHeight:"20vh",fontFamily:"verdana bold"}}
        >Mini<br/><br/>₹{standardPrice}</div>
   <div className='a1'
   style={{ 
        
        fontSize: "30px",width:"260px",margin: "2px",boxShadow: "5px 5px 5px 5px grey",textDecoration:"underline",
        textAlign: "center",minHeight:"20vh",fontFamily:"verdana bold"}}
        >Premium  <br/> <br/> ₹ {premiumPrice}</div>     </div>   
             </div>  </div> </>
  )
}

export default Map1