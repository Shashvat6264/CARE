import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Container, Row } from "react-bootstrap";
import "./styles.css";
import imgu from "./img/user-circle-solid.svg"
import fam from "./img/fam.svg"
function ChildReg() {
  return (
    <div>
      <Container className="mt-5" style={{fontFamily:"Karla"}}>
      <h1 >Child Registration</h1>
        <Row>
            
          <Col lg={4} md={6} sm={12}>
              <img src={imgu} className="imgu"> 
              </img>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>Enter Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label>Enter Age</Form.Label>
                <Form.Control type="number" placeholder="Enter Age" />
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Enter Birthmark</Form.Label>
                <Form.Control type="text" placeholder="Enter Birthmark" />
                
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="The above details are correct and i will be responsible for the details" />
              </Form.Group>
              <Button variant="primary btn-block" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col lg={8} md={6} sm={12}>
          <img src={fam} className="fam"> 
              </img>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ChildReg;
