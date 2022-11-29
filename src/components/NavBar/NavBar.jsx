import { Container, Nav, Navbar } from "react-bootstrap"
import { FaShoppingCart } from "react-icons/fa";
import logo from "../../assets/logo_react.png"
import "./NavBar.css"

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
        <img src={logo} alt="logo" className="logo" />
        </Navbar.Brand>
        

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" id="navLink">Bikinis</Nav.Link>
            <Nav.Link href="#pricing" id="navLink">Enterisa</Nav.Link>
            <Nav.Link href="#deets" id="navLink">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Nav>
          <Nav.Link href="#carrito">
            <FaShoppingCart id="carrito" /> 1
        </Nav.Link>
        </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

        
      </Container>
    </Navbar>
  )
}

export default NavBar 