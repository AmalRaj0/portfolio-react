import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MDBRipple } from 'mdb-react-ui-kit';
import Container from 'react-bootstrap/Container';
import image1 from  '../images/doctor appointment.png'
import image2 from  '../images/res (1).png'
import image3 from  '../images/res (2).png'
import '../components/react.css'
function Reactprj() {
 
  return (
    <div  style={{paddingRight:"150px",paddingLeft:"150px"}} className='section'>
        <Container>
    <Row className='mx-5'>
       <Col>
      <div className='p-2'>
      <MDBRipple rippleTag='a'>
        <img width={"300px"}
          src={image1}
          className='img-fluid rounded'
          alt='example'
        />
    <div style={{backgroundColor:"#1E555C"}}>
            <p className='text-center fw-bold'>Doctor Appointment</p>
        </div>
      </MDBRipple>
      </div>
</Col>
       <Col>
      <div className='p-2'>
      <MDBRipple rippleTag='a'>
        <img width={"300px"}
          src={image2}
          className='img-fluid rounded'
          alt='example'
        />
     <div style={{backgroundColor:"#1E555C"}}>
            <p className='text-center fw-bold'>Resturant App</p>
        </div>
      </MDBRipple>
      </div>
</Col>
       <Col>
      <div className='p-2'>
      <MDBRipple rippleTag='a'>
        <img width={"300px"}
          src={image3}
          className='img-fluid rounded'
          alt='example'
        />
       <div style={{backgroundColor:"#1E555C"}}>
            <p className='text-center fw-bold'>Contact App</p>
        </div>
      </MDBRipple>
      </div>
</Col>
</Row>

        </Container>
      </div>
  )
}

export default Reactprj
