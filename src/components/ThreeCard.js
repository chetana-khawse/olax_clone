import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useState } from 'react';
 import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ThreeCard(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (

<>
 <CardGroup style={{position:"relative",zIndex:"1",top:"350px",left:"0",minHeight:"19vh"}}>
       
      <Button variant="light" onClick={handleShow}>
      <Card style={{boxShadow:"2px 2px 2px 2px grey",width:"25vh"}} >
        <Card.Body>
           <Card.Title>Premium<img src="./png-transparent-car-mercedes-car-love-compact-car-vehicle-thumbnail.png" alt="logo" width="50px" height="40px"/></Card.Title>
          <Card.Text style={{fontSize:"20px"}}> ₹ {props.premiumPrice}
          </Card.Text> </Card.Body>
      </Card>  
      </Button>
      <Button variant="light" onClick={handleShow}> 
       <Card 
       style={{boxShadow:"2px 2px 2px 2px grey",width:"32vh"}}>
      <Card.Body>
          <Card.Title>Auto <img src="./d1c178bf08d27349f2f777bfa508b3dc.png" alt="logo" width="55px" height="40px"/></Card.Title>
          <Card.Text style={{fontSize:"20px"}}>₹{props.basePrice}
          </Card.Text>
      </Card.Body>
      </Card></Button>
       
       <Button variant="light" onClick={handleShow}>   
       <Card style={{boxShadow:"1px 1px 1px 1px grey",width:"30vh"}}>
        <Card.Body>
          <Card.Title>Mini <img src="./png-transparent-car-mercedes-car-love-compact-car-vehicle-thumbnail.png" alt="logo" width="50px" height="40px"/></Card.Title>
          <Card.Text style={{fontSize:"20px"}}> ₹{props.standardPrice}
          </Card.Text>
        </Card.Body>
      </Card></Button>
      
      <Modal show={show} onHide={handleClose} animation={false}>
        
        <Modal.Body>Confirm Ride....!</Modal.Body>
        
        <Modal.Footer><Button variant="dark" onClick={handleClose} >
            No
          </Button>
          <Button variant="dark" onClick={handleClose}>
            Yes
      </Button></Modal.Footer>
      </Modal>
      </CardGroup>
   
                 </> 
  )
}

export default ThreeCard