import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BasicFooter() {
  return (
    <Navbar expand="lg" bg="light" data-bs-theme="light" fixed="bottom">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Contattaci</Nav.Link>
            <Nav.Link href="#">Assistenza</Nav.Link>
            <Nav.Link href="#">About us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicFooter;