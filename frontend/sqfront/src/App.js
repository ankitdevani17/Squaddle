import React from 'react'
import Navb from './Components/Navb'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginSignup from './Screen/LoginSignup';
import Aboutus from './Screen/Aboutus';
import Home from './Screen/Home';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <>
      <Navb/>
      {/* <LoginSignup/> */}
      <Home/>
      {/* <Aboutus/> */}
      
      <Footer/>

      </>
    </div>
  )
}

export default App