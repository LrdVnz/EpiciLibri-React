import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContextProvider';

function BasicFooter() {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <Navbar expand="lg" bg={theme} data-bs-theme={theme} fixed="bottom">
      <Container>
          <Nav className="me-auto">
            <Nav.Link href="#">Contattaci</Nav.Link>
            <Nav.Link href="#">Assistenza</Nav.Link>
            <Nav.Link href="#">About us</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default BasicFooter;