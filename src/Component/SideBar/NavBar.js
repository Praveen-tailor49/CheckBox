import React from 'react'
import { Container, Navbar, Button } from 'react-bootstrap';

const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Chat</Navbar.Brand>
                    <div style={{display:'flex', columnGap:'20px'}}>
                        <div>
                            <Button  variant="primary" onClick={() => alert('true')} >
                                Add User
                            </Button>
                        </div>
                        <div>
                            <Button   variant="primary" onClick={() => alert('hello')} >
                                Create Group
                            </Button>
                        </div>
                    </div>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar