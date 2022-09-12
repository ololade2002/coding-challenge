import './Header.css';
import logo from '../../Crypto images/logo.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Header = () => {
  AOS.init();
    return ( 
        <div className="header"  >   
       
       {[ 'lg'].map((expand) => (
        <Navbar key={expand}  expand={expand} className="nav  mb-3">
          <Container fluid>
            <Navbar.Brand href="#"> <div className="logo">
       <img src={logo} alt="" />
    </div></Navbar.Brand>
            <Navbar.Toggle className='border-0' aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas className='offcanvas w-100'
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header  closeButton className='closeBtn ' variant='light' >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
             
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='offcanvas-body '>
            <Nav className="nav-links  justify-content-end  flex-grow-1 pe-3">

            <Nav.Link className='p-0' href="#product">Products</Nav.Link>
            <Nav.Link className='p-0' href="#feature">Features</Nav.Link>
            <Nav.Link className='p-0' href="#about">About</Nav.Link>
            <Nav.Link className='p-0' href="#contact">Contact</Nav.Link>
            <div className="login align-items-center">
             <span>Login</span>
             <span>|</span>
             <span><button className="button">Register</button></span>
            </div>
                 
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

  </div>

     );
}
 
export default Header;