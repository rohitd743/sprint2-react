import {
  Dropdown,
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./../holder/fors.png";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

export function AppNavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/" className="text-warning">
        <img src={logo} alt="Logo" />
        <span className="h2" style={{ fontFamily: "cursive" }}>
          Your One Stop Financial Solution
        </span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/home" className="h5 text-light">
            <HomeIcon></HomeIcon> Home
          </Nav.Link>

          {/* <Nav.Link as={Link} to="/register" className="h5">
            Register
          </Nav.Link> */}

          {/* <NavDropdown title="Register" id="basic-nav-dropdown">
            <NavDropdown.Item href="/register">User</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/orgregister">
              Organization
            </NavDropdown.Item>
          </NavDropdown> */}

          <Nav.Link as={Link} to="/about-us" className="h5 text-light">
            <InfoIcon></InfoIcon> About Us
          </Nav.Link>

          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-button-dark-example1"
              variant="secondary"
              className="text-light m-1"
            >
              Register
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">
              <Dropdown.Item as={Link} to="/register" active>
                <PersonAddIcon></PersonAddIcon> User
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item as={Link} to="/organizationupsert">
                <AccountBalanceIcon></AccountBalanceIcon> Organization{" "}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Nav.Link
            as={Link}
            to="/login"
            className="h5 btn btn-primary text-light "
          >
            Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

/////////Organization Registeration window nav bar/////////////////////////////////////////////////////////////////////

export function OrgUpsertNavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/" className="text-warning">
        <img src={logo} alt="Logo" />
        <span className="h2" style={{ fontFamily: "cursive" }}>
          Your One Stop Financial Solution
        </span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/home" className="h5 text-light">
            <HomeIcon></HomeIcon> Home
          </Nav.Link>

          <Nav.Link as={Link} to="/organizationlist" className="h5 text-light">
            <AccountBalanceIcon></AccountBalanceIcon> Organization List
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

////////////  user registration navbar///////////////
export function UserRegNavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/" className="text-warning">
        <img src={logo} alt="Logo" />
        <span className="h2" style={{ fontFamily: "cursive" }}>
          Your One Stop Financial Solution
        </span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/home" className="h5 text-light">
            <HomeIcon></HomeIcon> Home
          </Nav.Link>

          <Nav.Link
            as={Link}
            to="/login"
            className="h5 btn btn-primary text-light "
          >
            Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

////////////////////////user login screen nav bar/////////////////////////

export function UserLoginNavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/" className="text-warning">
        <img src={logo} alt="Logo" />
        <span className="h2" style={{ fontFamily: "cursive" }}>
          Your One Stop Financial Solution
        </span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/home" className="h5 text-light">
            <HomeIcon></HomeIcon> Home
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

////////////  home navbar///////////////
export function HomeNavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/" className="text-warning">
        <img src={logo} alt="Logo" />
        <span className="h2" style={{ fontFamily: "cursive" }}>
          Your One Stop Financial Solution
        </span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/home" className="h5 text-light">
            <HomeIcon></HomeIcon> Home
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
