import React from 'react'
import { Container } from 'react-bootstrap';
import Groups from './Group/Group';
import Message from './Message/Message';
import NavBar from './SideBar/NavBar';
import SideBar from './SideBar/SideBar';
import User from './User/User';
const Home = () => {
    return (
        <>
            {/* <Container> */}
                <NavBar/>
                <SideBar/>
                <Message/>
            {/* </Container> */}
        </>
    )
}

export default Home