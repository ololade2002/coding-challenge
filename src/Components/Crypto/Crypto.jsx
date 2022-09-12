import './Crypto.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Earning from '../Earning/Earning';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import { CrappoData } from '../../CrappoData/Data';
import { useState } from 'react';



    


const Crypto = () => {
const [selected,setSelected] = useState(1);


    return ( 
      
        <div className="crypto">
            <Earning/>
            <div className="crypto-container ">
            <Container >
                <Row className='g-5   pt-5 trade justify-content-center '>   
                    <p data-aos="zoom-in" data-aos-offset="260" data-aos-easing="ease" data-aos-duration="2500" data-aos-delay="400" >Trade Securely And Market 
                 The High Growth Cryptocurrencies.</p>
                
             
                 <div className="menu">
               {CrappoData.map((card,index) => (
                <div className={selected === index ? 'card-preview active' : 'card-preview'} key={index}
                 onClick={()=>setSelected(index)} >
                   <img src={card.img} alt="" />
              <div className='token' >
               <span>{card.token}</span>
               <span>{card.abbv}</span>
           </div>
           <span>{card.text}</span>
         {selected === index ? <button className='arrow'>{card.buttonText} <span><i className="bx bx-chevron-right"></i></span> </button> : <button className='arrow1'><i className="bx bx-chevron-right"></i></button> }
                </div>
                 ))}
                 </div>

           </Row>
            </Container>

            </div>
        </div>
        
     );
}
 
export default Crypto;