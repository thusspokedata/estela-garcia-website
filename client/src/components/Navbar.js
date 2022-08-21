import { Nav, Navbar, Container } from 'react-bootstrap'

function NavBar() {
  return (
    <>
      <Navbar variant="dark"
        sticky="top" expand="md" collapseOnSelect className="p-3" style={{backgroundColor:'gray', fontFamily:'Secular One'}}>
        <Container>

          <Navbar.Brand href="#home">Estela Gracia</Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#aboutMe">About Me</Nav.Link>
              <Nav.Link href="#gallery">Gallery</Nav.Link>
              <Nav.Link href="#multiMedia">Multi-Media</Nav.Link>
              <Nav.Link href="#event">Event</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;