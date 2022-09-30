import React, { useState } from 'react'
import { Form, Button, Modal } from 'react-bootstrap';
import { Group } from '../Store/Data';
import Multiselect from 'multiselect-react-dropdown';

const Groups = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);
    return (
        <>
            <Form>
                {
                    Group.map((val, index) => (
                        <Form.Group className="mb-3" controlId="formBasicCheckbox" key={index}>
                            <Form.Check type="checkbox" label={val.groupname} />
                        </Form.Group>
                    ))
                }
            </Form>

            {/* Add Group  */}
            <Modal show={show} centered onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Group</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Group Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" />
                        </Form.Group>
                        <Multiselect
                            disablePreSelectedValues
                            displayValue="key"
                            onKeyPressFn={function noRefCheck() { }}
                            onRemove={
                                function noRefCheck(data, index) { console.log('data', index.key); }
                            }
                            onSearch={function noRefCheck() { }}
                            onSelect={function noRefCheck() { }}

                            options={[
                                {
                                    cat: 'Group 1',
                                    key: 'Option 1'
                                },
                                {
                                    cat: 'Group 1',
                                    key: 'Option 2'
                                },
                                {
                                    cat: 'Group 1',
                                    key: 'Option 3'
                                },
                                {
                                    cat: 'Group 2',
                                    key: 'Option 4'
                                },
                                {
                                    cat: 'Group 2',
                                    key: 'Option 5'
                                },
                                {
                                    cat: 'Group 2',
                                    key: 'Option 6'
                                },
                                {
                                    cat: 'Group 2',
                                    key: 'Option 7'
                                }
                            ]}
                            style={{
                                chips: {
                                    background: '#414640'
                                },
                                multiselectContainer: {
                                    color: 'gray'
                                },
                                searchBox: {
                                    border: 'none',
                                    'border-bottom': '1px solid blue',
                                    'border-radius': '0px'
                                }
                            }}
                        />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" >
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Groups