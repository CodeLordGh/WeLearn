import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './signup.css';

function Signup() {
  return (
    <Container>
      <Row>
        <Col d-flex align-items-center justify-content-center flex-direction-column>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Your name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Signup
          </Button>
    </Form>
        </Col>
        <Col md={5} className='signup__bg'></Col>
      </Row>
    </Container>
  )
}

export default Signup