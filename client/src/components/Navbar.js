import {Container, Nav, Navbar} from 'react-bootstrap';

function NavBar() {
    return (
      <>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Estela Gracia</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#aboutMe">About Me</Nav.Link>
              <Nav.Link href="#gallery">Gallery</Nav.Link>
              <Nav.Link href="#multiMedia">Multi-Media</Nav.Link>
              <Nav.Link href="#event">Event</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>


            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
  
  export default NavBar;