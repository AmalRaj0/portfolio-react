import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
function Resume() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
       <Button variant="danger" onClick={handleShow}>
       Resume
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center'>Resume</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>
            <img width={"400px"} src="https://d25zcttzf44i59.cloudfront.net/academic-word-resume-template.png" alt="" />
        </Modal.Body>
        
      </Modal>
    </div>
  )
}

export default Resume
