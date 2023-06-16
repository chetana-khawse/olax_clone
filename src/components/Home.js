import React from 'react'
import App from '../App.css'

function Home() { 
  return (
    <div style={{backgroundColor:"#F46F52  ",color:"black" }}>
        
        <div style={{textAlign:"center"}}>
            <input type="text" placeholder='&#x26B2;   Pickup at'  style={{
                     fontSize:"20px",
                     fontFamily:"sans-serif", backgroundColor: "rgba(0, 0, 0, 0)",
                     border:"none",
                     borderBottom:"2px solid black",minWidth:"70vh",color:"black"}} /><br/>
            <input type="text" style={{
                     fontSize:"20px",
                     border:"none",
                     fontFamily:"sans-serif", backgroundColor: "rgba(0, 0, 0, 0)",
                     borderBottom:"2px solid black",margin:"20px",minWidth:"70vh",coloe:"black"}} placeholder=' &#x2192;   Drop'/>
        </div>
       






    </div>
  )
}

export default Home