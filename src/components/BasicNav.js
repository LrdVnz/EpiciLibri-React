import { Container, Nav, Navbar, NavDropdown, Form, InputGroup, Image } from "react-bootstrap";

import { ThemeContext } from "../contexts/ThemeContextProvider";
import { useContext, useState } from "react";

import { Link } from "react-router-dom";

const formThemes = {
  light : ' bg-light text-dark ',
  dark : ' bg-dark text-light ' 
}

function BasicNav({ handleDropdown, setSearchInput, searchInput, showSearch }) {

  const { theme, setTheme } = useContext(ThemeContext)
  const [ formTheme, setFormTheme ] = useState(formThemes.dark)
  
  let formClass = showSearch ? 'd-block' : 'd-none'

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
            <Nav.Link href="#"><Link to="/">Home</Link></Nav.Link>
            <Nav.Link href="https://github.com/LrdVnz">My Github</Nav.Link>
            <NavDropdown title="Choose your category"  className={formClass} id="basic-nav-dropdown">
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
            <Form className={formClass}> 
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


          