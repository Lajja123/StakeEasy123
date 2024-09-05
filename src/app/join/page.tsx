import React from 'react'
import NavBar from '../components/Navbar';
import Stepper from '../pages/Stepper';
import Footer from '../components/Footer';

const page = () => {
  return (
    <div className='main'>
      <NavBar />
      <Stepper />
      <Footer />
    </div>
  )
}

export default page
