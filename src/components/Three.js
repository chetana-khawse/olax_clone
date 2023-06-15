import React from 'react'

function Three() {
  return (
    <div style={{
        color:"black", 
    display:"grid",
    gap: "30px",
    gridTemplateColumns: "auto auto auto",
    padding: "5px 5px"}}>
        
        
        <div style={{
        border: "2px solid grey",
        padding: "20px",backgroundColor:"white",
        fontSize: "30px",
        textAlign: "center",minHeight:"20vh",fontFamily:"sans-serif",borderRadius:"15px"
      }}>Micro<br/>
      <img src={"icons8-car.gif"} alt=" logo" /></div>
      
      
      <div style={{
    
      border: "2px solid grey",
      padding: "20px",
      fontSize: "30px",
      backgroundColor:"white",
      textAlign: "center",minHeight:"20vh",fontFamily:"sans-serif",borderRadius:"15px"}}>Min<br/>
     < img src={"icons8-car-48 (1).png"} alt=" logo" /></div>

      <div style={{
      border: "2px solid grey",
      backgroundColor:"white",
      padding: "20px",
      fontSize: "30px",
      textAlign: "center",minHeight:"20vh",fontFamily:"sans-serif",borderRadius:"15px"}}>Prime <br/>
      <img src={"icons8-car-94.png"} alt=" logo" /></div>
      </div>
  )
}

export default Three