import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./../holder/fors.png";

export function AppNavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Navbar.Brand href="#home" className="text-warning">
        <img src={logo} alt="Logo" />
        <span className="h2" style={{ fontFamily: "cursive" }}>
          Your One Stop Financial Solution
        </span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/home" className="h5">
            Home
          </Nav.Link>

          <Nav.Link as={Link} to="/project" className="h5">
            Project
          </Nav.Link>
          <Nav.Link as={Link} to="/about-us" className="h5">
            About Us
          </Nav.Link>
          <Nav.Link as={Link} to="/login" className="h5">
            Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
