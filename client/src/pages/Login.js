import React from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './login.css';
import {Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';


function login() {
  return (
    <Container>
      <Row>
        <Col md={5} className='login__bg'></Col>
        <Col d-flex align-items-center justify-content-center flex-direction-column>
        <Form>
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
        Submit
      </Button>
      <div className='py-4'>
        <p className='text-center'>
          Don't have an account? <Link to='/signup'>Signup</Link>
        </p>
      </div>
    </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default login