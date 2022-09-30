import React, { useEffect, useState } from 'react'
import { Card, Form, Button, Row, Col, Modal } from 'react-bootstrap';
import { user } from '../Store/Data';
import $ from 'jquery';
import axios from 'axios';

const User = () => {

    const [show, setShow] = useState(false);
    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [userData, setUserData] = useState([])

    const [checked, setChecked] = useState([]);

    // get user list
    useEffect(() => {
        (async () => {
            await axios.get("https://rmsapi.arustu.com//api/Test/GetuserData")
                .then(response => {
                    // console.log('USStateList', response.data.data)
                    setUserData(response.data.data)
                })
                .catch(error => {
                    console.error('There was an error!', error);
                });
        })();
    })

    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
    };

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    // New User Add 
    const addUser = (e) => {
        e.preventDefault()

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://rmsapi.arustu.com/api/Test/InserttrialUser_table",
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
            if (response.Message === 'Successfully inserted') {
                alert('Successfully Add')
            } else {
                alert('Not Add')
            }
        });
    }

    console.log(checked);
    return (
        <>
            <div className="app">
                <div className="checkList">
                    <div className="list-container">
                        {user.map((item, index) => (
                            <div key={index}>
                                <input value={item.userId} type="checkbox" onChange={handleCheck} />
                                <span style={{ marginLeft: '30px' }}>{item.userName}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Add User Modal */}
            <Modal show={show} centered onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" onChange={(e) => setUserName(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e) => setUserPassword(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={addUser}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default User



