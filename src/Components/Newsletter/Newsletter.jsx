import './Newsletter.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';



const Newsletter = () => {

    return ( 
        <div className="news">
          
     <Container fluid>
        <Row className='p-0' data-aos="zoom-in" data-aos-offset="330" data-aos-easing="ease" data-aos-duration="2500" data-aos-delay="400"   >
    <Col sm={12} md={12} lg={12} >
               <div className="news-box img-fluid">
        <Row className='tab'>
            <div className="news-1">
                    <span>Start Mining Now</span>
                    </div>
               
        <Col sm={12} md={12} lg={5} className='news-2' >
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum.</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, saepe.</span>
         </Col>
        <Col sm={12} md={12} lg={5} className='news-3' >
                <form>
                    <input className='' type="text" placeholder='Enter message' />
                    <button className='newsBtn' >Subscribe</button>
                </form>
        </Col>
                </Row>
             
               </div>
     </Col>
        </Row>
     </Container>

        </div>
     );
}
 
export default Newsletter;




