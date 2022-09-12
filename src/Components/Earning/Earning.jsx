import './Earning.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Earning = () => {

    return ( 
        <div className="earning">
        <Container fluid >
            <Row className='justify-content-center g-3'>
          <Col sm={12} md={8} lg={10} className='text  text-center' >
         <span data-aos="zoom-out fade-up" data-aos-offset="230" data-aos-easing="ease" data-aos-duration="2500" data-aos-delay="400" >How Much Can You Earn With Us</span>
         <p data-aos="fade-up" data-aos-offset="230" data-aos-easing="ease" data-aos-duration="2500" data-aos-delay="400" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, id
             similique temporibus dignissimos tempore odio?</p>
      </Col>
        <Col xs={12} sm={10} md={10} lg={10} className='rates bg-light'  
      data-aos-anchor-placement="top-bottom"   data-aos="zoom-in" data-aos-offset="240" data-aos-easing="ease" data-aos-duration="2500" data-aos-delay="400"   >
       <div className="earn">
      
       <Row className='form gy-5 align-items-end pb-4  pe-3 ps-3'>
        <Col xs={12} sm={12} md={12} lg={5} className='' >
        <input type="text" className="rate" placeholder='Enter your hash rate' />
        </Col>
        <Col xs={12} sm={12} md={12} lg={3} className='' >
        <select className="select">
            <option value="TH/s">TH/s</option>
            <option value="H/s" >H/s</option>
            <option value="KH/s">KH/s</option>
            <option value="MH/s">MH/s</option>
            <option value="GH/s">GH/s</option>
          </select>
        </Col>
        <Col xs={12} sm={12} md={12} lg={3} className='' >
        <button className="calc">Calculate</button>
        </Col>
       </Row>
      

       <div className="eth">
        <span>ESTIMATED 24 HOUR REVENUE:</span>
        <span>0.055 130 59 ETH <span>($1275)</span></span>
        <span>Revenue will change based on mining difficulty and Ethereum price.</span>
       </div>

       </div>
       </Col>
               
            </Row>
        </Container>
        </div>
     );
}
 
export default Earning;