import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../assets/thumb_show.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Appbar = () => {
  return (
    <Navbar collapseOnSelect expand="md" className="bg-secondary">
      <Container>
        <Navbar.Brand className="bar">
          <img
            src={logo}
            width="auto"
            height="75"
            className="d-inline-block align-top logo"
          />
          {""}
          <Link className="navbar-brand title" to={`/`}>
            Movie Madness
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="burger color-white bg-white"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className="signin" to={`login`}>
              Login
            </Link>
            <Link className="movies" to={`films`}>
              Movies
            </Link>

            <Link className="Profile" to={`Profile`}>
              Profile
            </Link>
            <Link className="create" to={`create`}>
              Create profile
            </Link>
            <Link className="signout" to={`signout`}>
              Signout
            </Link>
          </Nav>
          <Navbar.Text className="logid">
            Signed in as:{" "}
            <a href="#login" className="idname">
              Mark Otto
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Appbar;
