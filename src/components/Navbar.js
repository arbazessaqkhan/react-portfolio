import { Link } from "react-scroll";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="mb-3" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand className="arbaz">
          {"@<"}Arbaz{" />"}
        </Navbar.Brand>
        <Navbar.Toggle id="hamburger" aria-controls="navbarScroll" />
        <Navbar.Offcanvas
          id="navbarScroll"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="arbaz">
              {"@<"}Arbaz{" />"}
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 gap-1">
              <Nav.Link>
                <Link to="header" smooth={true} duration={500} offset={-70}>
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="projects" smooth={true} duration={500} offset={-70}>
                  Projects
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="contact" smooth={true} duration={500} offset={-70}>
                  Contact
                </Link>
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
