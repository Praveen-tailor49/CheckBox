import React, { useEffect, useState } from 'react'
import { Card, Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Notifiation from '../Notifiation/Notifiation';
import { user } from '../Store/Data';
import $ from 'jquery';

const Login = () => {

  const navigate = useNavigate()
  const [userName, setUserName] = useState('')
  const [userPassword, setUserPassword] = useState('')

  useEffect(() => {
    (async () => {
      const token = sessionStorage.getItem('token')
      if (token) navigate('/')
    })();
  }, [])

  const loginUser = (e) => {
    e.preventDefault()

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://rmsapi.arustu.com/api/Test/GetDataTrialLogin",
      "method": "POST",
      "headers": {
        "content-type": "application/x-www-form-urlencoded"
      },
      "data": {
        "Username": userName,
        "Password": userPassword
      }
    }
    $.ajax(settings).done(function (response) {
      if (response.Message === 'Successfully') {
        sessionStorage.setItem('token', response.data[0].Id)
        alert('Successfully Login')
        navigate('/')
      } else{
        alert('Not Login')
      } 
    });
  }

  return (
    <>
      <Container>
        <div className="d-flex justify-content-center mt-5">
          <Card style={{ width: '28rem' }}>
            <Card.Body>
              <Card.Title>Login User</Card.Title>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter username" onChange={(e) => setUserName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" onChange={(e) => setUserPassword(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={loginUser}>
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  )
}

export default Login