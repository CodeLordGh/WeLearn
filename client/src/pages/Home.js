import React from 'react'
import {Row, Col, Button} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import "./bg.css";

function homePage() {
  return (
    <Row>
      <Col md={6} className= 'd-flex flex-direction-column align-items-center justify-content-center'>
        <div>
        <h1>Share your coding experience with friends</h1>
          <p>LetsCode lets you connect with your friends</p>
          <LinkContainer to='/chat'>
            <Button variant='success'>Get Started
              <i className='fas fa-comments home-message-icon'></i>
            </Button>
          </LinkContainer>
        </div>
      </Col>
      <Col md={6} className='Home__bg'>

      </Col>
    </Row>
  )
}

export default homePage