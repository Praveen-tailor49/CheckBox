import React from 'react'
import { Button, Card, Modal, Form, Col, Row } from 'react-bootstrap';
import NavBar from '../SideBar/NavBar';

const Message = () => {
    return (
        <div className='messageDiv'>
            {/* <NavBar /> */}
            <Card style={{ width: '100%', height: '10rem', marginTop: '10%' }}>
                <Card.Body>
                    <Card.Title>Message Box</Card.Title>
                    <Modal.Body >
                        <Form>
                            <Row>
                                <Col className='col-10'>
                                    <Form.Group className="mb-3 mt-5">
                                        {/* <Form.Label>Message</Form.Label> */}
                                        <Form.Control type="text" placeholder="Enter username" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Button  className="mb-3 mt-5" variant="primary" onClick={() => alert('hello')} >
                                        Send Msessage
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Modal.Body>
                </Card.Body>
            </Card>

        </div>
    )
}

export default Message
