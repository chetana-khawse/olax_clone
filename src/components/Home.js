import React from 'react';
import MapboxAutocomplete from "react-mapbox-autocomplete";



function Home() {
  const mapAccess = {
    // Thanks to SomeSoftwareTeam (https://github.com/SomeSoftwareTeam/some-react-app/blob/acd17860b8b1f51edefa4e18486cc1fb07afff70/src/components/SomeComponent.js)
    mapboxApiAccessToken:
      "pk.eyJ1IjoiY2hldGFuYS1raGF3c2UiLCJhIjoiY2xqM3NkaGxkMG92MzNwbzB6cTZranZ5diJ9.HmEUfEtrfUhGUPw6d0p4jQ"
  };
  
  function _suggestionSelect(result, lat, long, text) {
    console.log(result, lat, long, text);
  }
  
  return (
    <div>
      <div style={{
        
        padding:"5px", backgroundColor:"black",}}>
        

      <MapboxAutocomplete
          publicKey={mapAccess.mapboxApiAccessToken}
          inputClass="form-control search"
          onSuggestionSelect={_suggestionSelect}
          country="in"
          resetSearch={false}
          placeholder="&#x26B2;   Start location" 
/>
        
        <MapboxAutocomplete
          publicKey={mapAccess.mapboxApiAccessToken}
          inputClass="form-control search"
          onSuggestionSelect={_suggestionSelect}
          country="in"
          resetSearch={false}
          placeholder=" &#x2192;   End location" 
        />
            
        </div>
       


       



    </div>
  )
}

export default Home