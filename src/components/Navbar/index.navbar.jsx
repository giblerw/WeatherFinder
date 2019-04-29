import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';

import './style.navbar.scss';

class NavbarHeader extends Component {
    render() {
        return(
            <Navbar bg="dark" expand="lg" className="bg-dark navbar-dark">
                <Navbar.Brand href="#home">What's the Weather?</Navbar.Brand>
            </Navbar>
        )
    };
};

export default NavbarHeader;