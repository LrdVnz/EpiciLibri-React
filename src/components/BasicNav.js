import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function BasicNav({ handleDropdown }) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">EpiciLibri</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
            <NavDropdown title="Choose your category" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"onClick={ () => ( handleDropdown('fantasy') ) }>Fantasy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"onClick={ () => ( handleDropdown('historyBooks') ) }>History</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"onClick={ () => ( handleDropdown('horror') ) }>Horror</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4"onClick={ () => ( handleDropdown('romance') ) }>Romance</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5"onClick={ () => ( handleDropdown('scifi') ) }>Scifi</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicNav;
