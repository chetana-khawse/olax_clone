import React from 'react'

function Three() {
  return (
    <div style={{
        color:"black", 
    display:"grid",
    gridTemplateColumns: "auto auto auto",gap:"20px",borderRight:"1px grey",borderLeft:"1px grey"}}>
        
        
        <div style={{ 
        border: "2px solid grey",
        padding: "0 10px",
        fontSize: "30px",
        textAlign: "center",minHeight:"20vh",fontFamily:"verdana bold"
      }}>Micro<br/>
      <br/>
      </div>
      
      
      <div style={{
        border: "2px solid grey",padding: "0 10px",
      fontSize: "30px",textAlign: "center",minHeight:"20vh",fontFamily:"verdana bold"}}>Mini<br/>
      <br/>
     </div>

      <div style={{

      border: "2px solid grey",
      padding: "0 10px ",
      fontSize: "30px",
      textAlign: "center",minHeight:"20vh",fontFamily:"verdana bold"}}>Prime <br/>
      <br/>
    </div>
      </div>
  )
}

export default Three