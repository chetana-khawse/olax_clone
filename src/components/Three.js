import React from 'react'

function Three() {
  return (
    <div style={{
        color:"black", 
    display:"grid",
    gridTemplateColumns: "auto auto auto"}}>
        
        
        <div style={{ textDecoration:"underline",
        borderRight: "2px solid #AD3117 ",
        padding: "0 10px",backgroundColor:"#F46F52  ",
        fontSize: "30px",
        textAlign: "center",minHeight:"20vh",fontFamily:"Fantasy"
      }}>Micro<br/>
      $ 10<br/>
      <img src={"icons8-car-50.png"} alt=" logo" /></div>
      
      
      <div style={{
        textDecoration:"underline",
    
      borderRight: "2px solid #AD3117 ",
      padding: "0 10px",
      fontSize: "30px",
      backgroundColor:"#F46F52  ",
      textAlign: "center",minHeight:"20vh",fontFamily:"Fantasy"}}>Mini<br/>
      $ 20<br/>
     < img src={"icons8-car-48 (1).png"} alt=" logo" /></div>

      <div style={{
      textDecoration:"underline",
      backgroundColor:"#F46F52  ",
      padding: "0 10px ",
      fontSize: "30px",
      textAlign: "center",minHeight:"20vh",fontFamily:"Fantasy"}}>Prime <br/>
      $ 40<br/>
      <img src={"icons8-car-94.png"} alt=" logo" /></div>
      </div>
  )
}

export default Three