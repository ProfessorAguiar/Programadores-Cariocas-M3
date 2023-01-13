import reactLogo from '../assets/react.svg'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
function BarraDeNavegacao(){
  return(
    <Navbar bg="secondary" expand="lg">
      <Container fluid>
       <img src={reactLogo}></img>
        <Navbar.Brand href="#">React+Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">home</Nav.Link>
            <Nav.Link href="#action2">sobre</Nav.Link>
            <NavDropdown title="projetos" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">JavaScript</NavDropdown.Item>
              <NavDropdown.Item href="#action4">React</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Todos os projetos
              </NavDropdown.Item>
            </NavDropdown> 
            <Nav.Link href="#action2">contato</Nav.Link> 
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="primary">buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default BarraDeNavegacao