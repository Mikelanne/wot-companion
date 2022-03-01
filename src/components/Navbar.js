import Nav from "react-bootstrap/nav"
import {Link} from 'react-router-dom'
import Button from "react-bootstrap/button"
import { Container, Item, Navbar, } from "react-bootstrap"

const NavBar = () => {

    return (
        <div>
        {/* <Navbar>
            <Container>
                <Navbar.Brand href="#home">Brand link</Navbar.Brand>
            </Container>
        </Navbar>
        <br />
        <Navbar bg="light">
            <Container>
            <Navbar.Brand>Brand text</Navbar.Brand>
            </Container>
        </Navbar> */}
      
        <Navbar>
        <Container>
            <Navbar.Brand href="#home">
            <img
                src="http://jcsalomon.github.io/wot-chapter-icons/Wheel-icon.svg"
                width="80"
                height="80"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
            </Navbar.Brand>
        </Container>
        </Navbar>
        </div>
    )
}

export default NavBar