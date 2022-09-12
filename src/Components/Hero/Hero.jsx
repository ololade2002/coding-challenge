import './Hero.css';
import Header from '../Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import heroimg from '../../Crypto images/hero-img.png';
import whyimg from '../../Crypto images/why-img.png'


const Hero = () => {
 return ( 
    <div className="hero">
    <Header/>
           <Container>
            <Row className='hero-body mt-5 gx-5 justify-content-center align-items-center ' >
             
       <Col xs={10} sm={10} md={10} lg={6} className='hero-left ' >
         <div className="deals align-items-center justify-content-center">
            <div  data-aos="zoom-in" data-aos-offset="50" 
              data-aos-easing="ease-in-sine" data-aos-duration="600"
            ></div>
            <span  data-aos-easing="ease-in-sine" data-aos-duration="600"
             data-aos="zoom-in" data-aos-offset="50"   >70% SAVE</span>
            <span> for the best black friday deals</span>
           </div>

           <div className="hero-text ">
            <span  data-aos="fade-up" data-aos-offset="80" data-aos-duration="2500" data-aos-delay="400"  >Fastest &  Secure  Platform To Invest In Cypto</span>
            <p  data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease" data-aos-duration="2500" data-aos-delay="400"  >buy and sell cyptocurrencies by trusted 10M wallets,in over 100M transactions</p>
            
            <div className="buton">
           <button  data-aos="zoom-in" data-aos-offset="100" data-aos-easing="ease" data-aos-duration="2500" data-aos-delay="400"
           className="button2 ">Try For Free  <div data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease" data-aos-duration="2500" data-aos-delay="400" ><div></div></div> </button>
           </div>
          
         </div>
        </Col>
    

        <Col xs={12} sm={12} md={12} lg={6} className='img-fluid  text-sm-center' >
      <img src={heroimg} alt=""  data-aos="zoom-in" data-aos-offset="100" data-aos-easing="ease" data-aos-duration="2500" data-aos-delay="400"  style={{width:'90%',objectFit:'contain'}}/>
        </Col>
            </Row>
           </Container>

{/* Chart */}

 <section className='chart mt-5  p-5'>
<Container fluid className='' >
    <Row className='g-5  p-0 chart-box '>


 <Col xs={12} sm={12} md={12} lg={4} className='box ' data-aos="fade-up" data-aos-offset="150" data-aos-easing="ease" data-aos-duration="2500" data-aos-delay="400" >
    <i className="bx bx-bar-chart icon "></i>
    <div className="car">
        <span>$30B</span>
        <span>Digital Currency Exchange</span>
    </div>
 </Col>


 <Col sm={12} md={12} lg={4}  className='box' data-aos="fade-up" data-aos-offset="150" data-aos-easing="ease" data-aos-duration="2500" data-aos-delay="400">
 <i className="bx bx-wifi-off icon "></i>
 <div className="car">
        <span>190+</span>
        <span>Countries Around The World</span>
    </div>
 </Col>

 <Col sm={12} md={12} lg={4}  className='box' data-aos="fade-up" data-aos-offset="150" data-aos-easing="ease" data-aos-duration="2500" data-aos-delay="400" >
    <i className="bx bxs-user icon "></i>
    <div className="car">
        <span >$10M</span>
        <span>Trusted Wallets Investors</span>
    </div>
 </Col>

    </Row>
</Container>
 </section>

{/* Why Choose Chappo */}

<section className="why ">
    <Container fluid>
        <Row className='why d-flex justify-content-center  align-items-center' >
      <Col sm={12} md={12} lg={6} data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease" data-aos-duration="2500" data-aos-delay="400" >
      <img className='img-fluid text-center' style={{width:'90%'}}  src={whyimg}  alt="" />
      </Col>

      <Col sm={12} md={12} lg={6} className='why-right'data-aos="fade-up" data-aos-offset="180" data-aos-easing="ease" data-aos-duration="2500" data-aos-delay="400" >
     <span>Why you should choose CHAPPO</span>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, laboriosam? Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. In, praesentium.</p>
        <button className='learn-button' >learn more</button>
      </Col>
        </Row>
    </Container>
</section>



      </div>    
     );
}
 
export default Hero;
       