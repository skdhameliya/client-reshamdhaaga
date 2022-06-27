import React from 'react'

const OurCustomers = () => {
    return (
        <>
            <div className="container-fluid mt-5" id='ourCustomers'>
                <h1 className='myTitle text-center'>Take A Look At Our Customers..!</h1>
                <a href="https://www.instagram.com/rakhi_reshamdhaaga/" target={'_blank'}>

                    <video width="100%" loop autoPlay muted>
                        <source src="../photos/ourCustomers2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                </a>


            </div>
        </>
    )
}

export default OurCustomers