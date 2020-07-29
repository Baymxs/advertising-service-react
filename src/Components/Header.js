import React, {Component} from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import logo from './logo192.png'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Banners from "../Pages/Banners";
import Categories from "../Pages/Categories";

class Header extends Component {
    render() {
        return (
            <>
                <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="Logo"
                            /> Advertising Service
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/banners">Banners</Nav.Link>
                                <Nav.Link href="/categories">Categories</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Switch>
                        <Route exact path="/banners" component={Banners}/>
                        <Route exact path="/categories" component={Categories}/>
                    </Switch>
                </Router>
            </>
        );
    }
}

export default Header;