import React from 'react'
import Footer from './components/Footer/Footer'
import GetAllProducts from './components/GetAllProducts'
import NavBar from './components/NavBar/NavBar'
import AboutUs from './components/About Us/AboutUs'
import OurCustomers from './components/Our Customers/OurCustomers'
import "./App.css"

const App = () => {
  return (
    <>
      <NavBar />  
      
      <div className="container-fluid pb-1 titleDiv">
        <h1 className="myMainTitle text-center pt-5 mb-0">SORRY</h1>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 40 1440 320"><path fill="#F4DECB" fillOpacity="1" d="M0,128L720,192L1440,128L1440,0L720,0L0,0Z"></path></svg>

      <AboutUs />
      <GetAllProducts />
      <OurCustomers />    
      <Footer />
    </>
  )
}

export default App