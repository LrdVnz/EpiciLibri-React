import { Container, Nav, Navbar, NavDropdown, Form, InputGroup, Image } from "react-bootstrap";

import { ThemeContext } from "../contexts/ThemeContextProvider";
import { useContext, useState } from "react";

const formThemes = {
  light : ' bg-light text-dark ',
  dark : ' bg-dark text-light ' 
}

function BasicNav({ handleDropdown, setSearchInput, searchInput }) {

  const { theme, setTheme } = useContext(ThemeContext)
  const [ formTheme, setFormTheme ] = useState(formThemes.dark)
  
  const modifyInputColors = () => {
    if(theme === 'dark'){
      setTheme('light');
      setFormTheme(formThemes.light)
    } else {
      setTheme('dark');
      setFormTheme(formThemes.dark)
    }
  }

  return (
    <Navbar expand="lg" bg={theme} data-bs-theme={theme} className='pt-2 pb-5'>
      <Container className="align-items-center">
        <Navbar.Brand href="#home" 
        className="d-flex align-items-center">
         <span>EpiciLibri</span>
         <span className="ms-2">
          <Image src="https://i.ibb.co/HBYcTg4/EPICODE-2-0-LOGO-15.webp" alt="logo"
           fluid 
           style={{maxWidth: '33px'}}
          />
         </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto align-items-center">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
            <NavDropdown title="Choose your category" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={ () => ( handleDropdown('fantasy') ) }>Fantasy</NavDropdown.Item>
              <NavDropdown.Item onClick={ () => ( handleDropdown('historyBooks') ) }>History</NavDropdown.Item>
              <NavDropdown.Item onClick={ () => ( handleDropdown('horror') ) }>Horror</NavDropdown.Item>
              <NavDropdown.Item onClick={ () => ( handleDropdown('romance') ) }>Romance</NavDropdown.Item>
              <NavDropdown.Item onClick={ () => ( handleDropdown('scifi') ) }>Scifi</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Change theme" >
            <NavDropdown.Item href="#action/3.6"onClick={ () => modifyInputColors() }>
              {theme === 'dark' ? 'light' : 'dark' }
              </NavDropdown.Item>
            </NavDropdown>
            <Form> 
                <InputGroup >
                  <InputGroup.Text className={formTheme + ' border border-0'}>
                  Search Book:
                  <Form.Control
                    type = "text"
                    value = { searchInput }
                    onChange={(e) => setSearchInput(e.target.value)}
                    className = 'ms-2'
                  />
                  </InputGroup.Text>
                </InputGroup>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicNav;


          