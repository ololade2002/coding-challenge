import './Footer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../Crypto images/logo.svg';
import visa from '../../Crypto images/visa.png';
import mastercard from '../../Crypto images/mastercard.png';
import bitcoin from '../../Crypto images/bitcoin.png';

const Footer = () => {

    return ( 
        <div className="footer ">
           <Container fluid >
            <Row className='footer-body justify-content-center  pt-3 pb-3 '>
                <Col sm={12} md={10}  lg={3} className='justify-content-center ' >
                    <div className="logo-f">
                        <img src={logo} alt="" />
                    </div>
                </Col>
                <Col sm={12} md={12} lg={4} >
                    <Row className='footer-text'>
                        <Col className='' >
                       <ul>
                       <span className='first'>Quick Links</span>
                        <li>Home</li>
                        <li>Products</li>
                        <li>About</li>
                        <li>Features</li>
                        <li>Contact</li>
                       </ul>
                    </Col>
                     <Col  >
                        <ul>
                            <span className='first' >Resource Links</span>
                            <li>Download Whitepaper</li>
                            <li>Smart Token</li>
                            <li>Blockchain Explore</li>
                            <li>Crypto API</li>
                            <li>Interest</li>
                        </ul>
                     </Col>
                    </Row>
                </Col>
                <Col sm={12} md={12} lg={4} className=' ps-lg-5' >
                    <Row className='payment-f justify-content-center align-item-center' >
                        <Col sm={12} md={12} lg={12}  >
                            <span className='payment'>We accept the following payment system</span>
                        </Col>
                        <Col  sm={6} md={5} lg={12} className='align-items-center' >
                            <div className="payment-img text-center ">
                            <img  src={visa} alt="" />
                            <img  src={mastercard} alt="" />
                            <img src={bitcoin} alt="" />
                            </div>
                        </Col>
                       
                    </Row>
                </Col>
            </Row>
           </Container>

          <Container fluid>
           <div className="end  align-items-center">
          <div>
            <span>&copy;2022 CRAPPO. All rights reserved. </span>
          </div>

          <div className='social'>
           <a href="#social"><i className="bx bxl-youtube"></i></a>
           <a href="#social"><i className="bx bxl-whatsapp"></i></a>
           <a href="#social"><i className="bx bxl-instagram"></i></a>
           <a href="#social"><i className="bx bxl-twitter"></i></a>
           <a href="#social"><i className="bx bxl-linkedin-square"></i></a>
          </div>

           </div>
           </Container>

        </div>
     );
}
 
export default Footer;