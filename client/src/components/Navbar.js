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
          href="/home"
          style={{ fontFamily: "Kaushan Script", fontSize: "1.7rem" }}
        >
          Estela García
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          {isLoggedIn ? (
            <>
              <Nav>
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="#aboutMe">About Me</Nav.Link>
                <Nav.Link href="/photos">Gallery</Nav.Link>
                <Nav.Link href="#multiMedia">Multi-Media</Nav.Link>
                <Nav.Link href="/concerts">Concerts</Nav.Link>
                <Nav.Link href="/concerts/add-new">Add a Concert</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
            </>
          ) : (
            <>
              <Nav>
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="#aboutMe">About Me</Nav.Link>
                <Nav.Link href="/photos">Gallery</Nav.Link>
                <Nav.Link href="#multiMedia">Multi-Media</Nav.Link>
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
