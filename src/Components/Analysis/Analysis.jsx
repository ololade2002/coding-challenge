import './Analysis.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../../Crypto images/feature-1-img.png';
import img2 from '../../Crypto images/feature-2-img.png';
import img3 from '../../Crypto images/feature-3-img.png';


const Analysis = () => {

    return ( 
        <div className="analysis ">
      
       <Container fluid >
       <div className="heading "   data-aos="zoom-in" data-aos-offset="280" data-aos-easing="ease" data-aos-duration="2500" data-aos-delay="400"   >Market Sentiments, Portfolio, And Run The 
       Infrastructure Of Your Choice</div>    
       

        <div className="analysis-cards justify-content-center align-item-center pt-5 pb-0 ">
        <Row className='g-5 p-2 cardOne '>
            <Col sm={12} md={12} lg={5} className='justify-content-center' >
                <div className="left-a">
                <span   data-aos="fade-in" data-aos-offset="280" data-aos-easing="ease" data-aos-duration="2500" data-aos-delay="400"   >Invest Smart</span>
                <p data-aos="fade-in" data-aos-offset="280" data-aos-easing="ease" data-aos-duration="2500" data-aos-delay="400"   >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur 
                    rem ducimus vitae maiores dolorum alias.</p>
                    <button className='learn-more' data-aos="zoom-in" data-aos-offset="290" data-aos-easing="ease" data-aos-duration="2500" data-aos-delay="400"   >learn more</button>
                    </div>
            </Col>
            <Col sm={12} md={12} lg={7}  >
                <img data-aos="zoom-in" data-aos-offset="300" data-aos-easing="ease" data-aos-duration="2500" data-aos-delay="400"   src={img1} className='img-fluid ' alt="" />
            </Col>
        </Row>

         
        <Row className='g-5 p-2 cardTwo '>
            <Col sm={12} md={12} lg={7}  >
                <img src={img2 }  className='img-fluid' alt="" 
                 data-aos="zoom-in" data-aos-offset="320" data-aos-easing="ease" data-aos-duration="2500" data-aos-delay="400"   />
            </Col>
            <Col sm={12} md={12} lg={5}  >
                <div className="left-a">
                <span data-aos="fade-in" data-aos-offset="305" data-aos-easing="ease" data-aos-duration="2500" data-aos-delay="400"   >Detailed Statistics</span>
                <p data-aos="fade-in" data-aos-offset="310" data-aos-easing="ease" data-aos-duration="2500" data-aos-delay="400"   >Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Libero deserunt commodi quos adipisci! Corporis, vero?</p>
                    <button data-aos="zoom-in" data-aos-offset="310" data-aos-easing="ease" data-aos-duration="2500" data-aos-delay="400"   className='learn-more' >learn more</button>
                    </div>
            </Col>
        </Row>

        <Row className='g-5 p-2 cardOne align-items-center justify-content-center'>
            <Col sm={12} md={12} lg={5}  >
                <div className="left-a justify-content-center">
                <span data-aos="fade-in" data-aos-offset="316" data-aos-easing="ease" data-aos-duration="2500" data-aos-delay="400"   >Grow Your Profit And Track Your Investments</span>
                <p data-aos="fade-in" data-aos-offset="318" data-aos-easing="ease" data-aos-duration="2500" data-aos-delay="400"   >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit 
                    enim odit distinctio dolore id incidunt?</p>
                    <button data-aos="zoom-in" data-aos-offset="320" data-aos-easing="ease" data-aos-duration="2500" data-aos-delay="400"   className='learn-more' >learn more</button>
                    </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={7}  >
                <img src={img3}  className='img-fluid' alt="" data-aos="zoom-in" data-aos-offset="325" data-aos-easing="ease" data-aos-duration="2500" data-aos-delay="400"   />
            </Col>
        </Row>
        </div>
       </Container>

     

        </div>
     );
}
 
export default Analysis;