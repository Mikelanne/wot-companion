import Nav from "react-bootstrap/nav"
import {Link} from 'react-router-dom'
import Button from "react-bootstrap/button"
import { Container, Item, Navbar, } from "react-bootstrap"

const NavBar = () => {

    return (
        <div>
        <Navbar bg="light" expand="lg">
            <Container>
                    <Navbar.Brand href="/">
                    <img
                        src="http://jcsalomon.github.io/wot-chapter-icons/Wheel-icon.svg"
                        width="80"
                        height="80"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/dashboard">User Dashboard</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavBar