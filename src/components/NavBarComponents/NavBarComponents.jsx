import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';

const NavBarComponent = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Cafe cafecito</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Products</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Infusions</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Drinks</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cups</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Donations</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidgetComponent />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;