import React from 'react'

const Footer = () => {
  return (
    <>
      {/* <div id='contactUs'>
        <svg id="svgBottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill='#F4DECB' fillOpacity="1" d="M0,128L720,192L1440,128L1440,320L720,320L0,320Z"></path></svg>
            <div className="container-fluid text-center pb-5 footerDiv">
                <h3 className="myMainTitle text-center mb-4">Contact Us</h3>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <a className="p-1" href="https://wa.me/+917016160266?text=Hi" target={"_blank"}><img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" alt="WhatsApp" /></a>
                    <a className="p-1" href="https://www.instagram.com/rakhi_reshamdhaaga/"><img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png" alt="Instagram" /></a>
                    <a className="p-1" href="https://www.instagram.com/rakhi_reshamdhaaga/"> <img src="https://img.icons8.com/color/48/undefined/facebook-new.png" alt="Facebook" /> </a>
                </div>

                <br /><a className="p-1" href="https://www.instagram.com/rakhi_reshamdhaaga/">Visit here for Privacy Policy, TnC &amp; Cancellation/Refund Policies </a>

            </div>
      </div> */}

    <div id='contactUs'>
        <svg id="svgBottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill='#F4DECB' fillOpacity="1" d="M0,128L720,192L1440,128L1440,320L720,320L0,320Z"></path></svg>
            <div className="container-fluid text-center pb-5 footerDiv">
              
              <h3 className="myMainTitle text-center mb-4">Contact Us</h3>
              
              <div className="row">
                <div className="col-sm-4 align-self-center">
                  <ul class="list-group">
                    <a className="nav-item nav-link" href="/">Home</a>
                    <a className="nav-link" href="#aboutUs">About Us</a>
                    <a className="nav-item nav-link" href="#ourProducts">Our Products</a>
                    <a className="nav-item nav-link" href="#ourCustomers">Our Customers</a>
                  </ul>
                </div>

                <div className="col-sm-4 align-self-center">
                  <div className="btn-group" role="group" aria-label="Basic example">
                      <a className="p-1" href="https://wa.me/+917016160266?text=Hi" target={"_blank"}><img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" alt="WhatsApp" /></a>
                      <a className="p-1" href="https://www.instagram.com/rakhi_reshamdhaaga/"><img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png" alt="Instagram" /></a>
                      <a className="p-1" href="https://www.instagram.com/rakhi_reshamdhaaga/"> <img src="https://img.icons8.com/color/48/undefined/facebook-new.png" alt="Facebook" /> </a>
                  </div>
                </div>
                
                <div className="col-sm-4 align-self-center text-center">Application coming soon</div>
              </div>


                
                

                <br /><a className="p-1" href="https://www.instagram.com/rakhi_reshamdhaaga/">Visit here for Privacy Policy, TnC &amp; Cancellation/Refund Policies </a>

            </div>
      </div>

    </>
  )
}

export default Footer