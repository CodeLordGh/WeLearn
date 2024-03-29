import {React, useState } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import './login.css';
import { Link } from 'react-router-dom';


function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(e){
    e.preventDefault();
    //Login Logic

  }
  return (
    <Container>
      <Row>
        <Col md={5} className='login__bg'></Col>
        <Col d-flex align-items-center justify-content-center flex-direction-column>
        <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required onChange={(e) => setEmail(e.target.value)} value={email} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} value={password} />
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

export default Login