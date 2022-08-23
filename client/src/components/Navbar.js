import { Nav, Navbar, Container } from "react-bootstrap";

function NavBar() {
  return (
    <div className="navbar-landing">
      <Navbar
        variant="dark"
        sticky="top"
        expand="md"
        collapseOnSelect
        className="p-1"
      >
        <Container>
          <Navbar.Brand
            href="/"
            style={{ fontFamily: "Kaushan Script", fontSize: "1.7rem" }}
          >
            Estela García
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#aboutMe">About Me</Nav.Link>
              <Nav.Link href="/upload-photos">Gallery</Nav.Link>
              <Nav.Link href="#multiMedia">Multi-Media</Nav.Link>
              <Nav.Link href="#event">Event</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
