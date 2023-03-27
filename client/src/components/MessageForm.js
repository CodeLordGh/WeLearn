import React from 'react'
import { FormControl, FormGroup, Row, Col, Form, Button } from 'react-bootstrap'
import './MessageForm.css'

function MessageForm() {
  return (
    <>
        <div className='messages-output'></div>
        
        <Form>
            <Row>
                <Col md={11}>
                    <FormGroup>
                        <FormControl type='text' placeholder='Your message...'></FormControl>
                    </FormGroup>
                </Col>
                <Col md={1}>
                    <Button type='submit' variant='primary' style={{width: '100%', backgroundColor: 'orange'}} >
                        <i className='fas fa-paper-plane'></i>
                    </Button>
                </Col>
            </Row>
        </Form>
    </>
  )
}

export default MessageForm
