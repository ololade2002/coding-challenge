import React from 'react';
import './App.css';
import Hero from './Components/Hero/Hero';
import 'bootstrap/dist/css/bootstrap.min.css';
import Crypto from './Components/Crypto/Crypto';
import Analysis from './Components/Analysis/Analysis';
import Newsletter from './Components/Newsletter/Newsletter';
import Footer from './Components/Footer/Footer';

function App() {
  return (
        <div className='App' >
          <Hero/>
         <Crypto/>
         <Analysis/>
       <Newsletter/>
       <Footer/>
        </div>
  )
}

export default App;
