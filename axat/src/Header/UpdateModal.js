import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { FloatingLabel } from "react-bootstrap";

function UpdateModal({show , setShow , loginV}) {
    
    
  const handleClose = () => setShow(false);


  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FloatingLabel
              controlId="floatingInput"
              label="First NAme"
            
            >
              <Form.Control
                type="text"
                placeholder="First Name"
                value={loginV?.firstName}
                
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="LastName">
              <Form.Control
                type="text"
                placeholder="LastName"
                value={loginV?.lastName}
              />
            </FloatingLabel>

            <FloatingLabel controlId="floatingInput" label="Age">
              <Form.Control
                type="number"
                placeholder="Age"
                value={loginV?.age}
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Email">
              <Form.Control
                type="email"
                placeholder="Password"
                value={loginV?.email}
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Address">
              <Form.Control
                type="text"
                placeholder="Address"
                value={loginV?.address?.address}
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="City">
              <Form.Control
                type="text"
                placeholder="City"
                value={loginV?.address?.city}
              />
            </FloatingLabel>
           
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
        <h1>Hello</h1>
      </Modal>
    </>
  );
}

export default UpdateModal;
