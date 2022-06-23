import React from 'react'

const Footer = () => {
  return (
    <>
      <div id='contactUs'>
        <svg id="svgBottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6E2C00" fillOpacity="1" d="M0,128L720,192L1440,128L1440,320L720,320L0,320Z"></path></svg>
            <div id="svgBottom" className="container-fluid text-center pb-5" style={{"background":"#6E2C00"}}>
                <h3 className="myTitle text-center mb-4">Contact Us</h3>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <a className="p-1" href="https://wa.me/+918980129712?text=Hi" target={"_blank"}><img src="https://img.icons8.com/color/48/undefined/whatsapp--v1.png" alt="WhatsApp" /></a>
                    <a className="p-1" href="https://www.instagram.com/rakhi_reshamdhaaga/" target={"_blank"}><img src="https://img.icons8.com/fluency/48/undefined/instagram-new.png" alt="Instagram" /></a>
                    <a className="p-1" href="https://www.instagram.com/rakhi_reshamdhaaga/" target={"_blank"}> <img src="https://img.icons8.com/color/48/undefined/facebook-new.png" alt="Facebook" /> </a>
                </div>
                {/* <p>All rights are reserved by <a className="p-1" href="https://www.instagram.com/rakhi_reshamdhaaga/" target={"_blank"}> Reshamdhaaga</a></p> */}
            </div>
      </div>
    </>
  )
}

export default Footer