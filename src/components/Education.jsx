import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../components/Education.css'
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import TrackVisibility from 'react-on-screen';
function Education() {
  return (
    <TrackVisibility once>
            {({isVisible})=>
    <div id='education'>
      <div className='mt-5 pb-5'>
        <h2 className='text-center pb-5'>Education</h2>
        <Container>
          <Row>
            <Col>
              <div className='d-flex justify-content-center'>
                <div style={{ width: "500px" }}>
                 <div  className={isVisible?"animate__animated animate__fadeInDown":""}>
                 <MDBCard style={{backgroundColor:"#8D98A7"}} className='p-3 text-end' >
                     <div style={{lineHeight:"100%"}}>
                     <p className='fw-bold text-dark fs-3'>SSLC</p>
                      <p className='fs-6 text-dark'>2017</p>
                      <p className='text-dark'>K R P M H S S ,Seethathodu</p>
                     </div>
                  </MDBCard>
                  </div>
                  <div  className={isVisible?"animate__animated animate__fadeInDown":""}>
                  <MDBCard  className='p-3 text-end' style={{marginTop:"130px",backgroundColor:"#DCCCBB"}}>
                  <div style={{lineHeight:"100%"}}>
                     <p className='fw-bold text-dark fs-3'>Bachelor of Computer Applications</p>
                      <p className='fs-6 text-dark'>2020-2023</p>
                      <p className='text-dark'>Shermount College,Erumely</p>
                     </div>
                  </MDBCard>
                  </div>
                </div>

                <div style={{ lineHeight: "100%" }} className='d-flex flex-column align-items-center'>
                  <p className='fs-1'>&#x2022;</p>
                  <div className="vl"></div>
                  <p className='fs-1'>&#x2022;</p>
                  <div className="vl"></div>
                  <p className='fs-1'>&#x2022;</p>
                  <div className="vl"></div>
                  <p className='fs-1'>&#x2022;</p>
                </div>
                <div style={{ width: "500px" }}>
                  <div  className={isVisible?"animate__animated animate__fadeInDown":""}>
                  <MDBCard  className='p-3 text-start' style={{marginTop:"130px",backgroundColor:"#EAB464"}}>
                  <div style={{lineHeight:"100%"}}>
                     <p className='fw-bold text-dark fs-3'>PLUS TWO</p>
                      <p className='fs-6 text-dark'>2020</p>
                      <p className='text-dark'>K R P M H S S ,Seethathodu</p>
                     </div>
                  </MDBCard>
                  </div>
              <div  className={isVisible?"animate__animated animate__fadeInDown":""}>
              <MDBCard  className='p-3 text-start' style={{marginTop:"130px",backgroundColor:"#A7754D"}}>
                  <div style={{lineHeight:"100%"}}>
                     <p className='fw-bold text-dark fs-3'>ME(A)RN Stack</p>
                      <p className='fs-6 text-dark'>Present</p>
                      <p className='text-dark'>Luminar Technolab,Kochi</p>
                     </div>
                  </MDBCard>
              </div>
                </div>
              </div>
            </Col>

          </Row>
          </Container>

      </div>
    </div>}
    </TrackVisibility>
  )
}

export default Education
