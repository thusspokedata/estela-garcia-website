import React, { useContext } from "react";
import { AuthContext } from "../context/auth";
import { Nav, Navbar, Container } from "react-bootstrap";

function NavBar() {
  const { isLoggedIn, logoutUser, user } = useContext(AuthContext);
  return (
    // <div className="navbar-landing">
    <Navbar
      variant="dark"
      sticky="top"
      expand="md"
      collapseOnSelect
      className="p-2 navbar-landing"
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
          {isLoggedIn ? (
            <>
              <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#aboutMe">About Me</Nav.Link>
                <Nav.Link href="/photos">Gallery</Nav.Link>
                <Nav.Link href="/admin/photos/" style={{color:'gray',fontSize:'0.7rem'}}>Add Gallery</Nav.Link>
                <Nav.Link href="/medias">Multi-Media</Nav.Link>
                <Nav.Link href="/admin/medias" style={{color:'gray',fontSize:'0.7rem'}}>Add Multi-Media</Nav.Link>
                <Nav.Link href="/concerts">Concerts</Nav.Link>
                <Nav.Link href="/concerts/add-new" style={{color:'gray',fontSize:'0.7rem'}}>Add a Concert</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
            </>
          ) : (
            <>
              <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#aboutMe">About Me</Nav.Link>
                <Nav.Link href="/photos">Gallery</Nav.Link>
                <Nav.Link href="/medias">Multi-Media</Nav.Link>
                <Nav.Link href="/concerts">Concerts</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    //  </div>
  );
}

export default NavBar;
