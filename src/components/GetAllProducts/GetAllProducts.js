import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Footer from '../Footer/Footer'

const GetAllProducts = () => {
    const AllProductsData = JSON.parse(sessionStorage.getItem("AllProductsData"))

    useEffect(() => {
        if(AllProductsData != null){    
            document.getElementById("loader").style.display = "none";
            document.getElementById("myMain_GetAllProducts").style.display = "block";
        }else{
            alert("Products Not Found")
        }
    }, [])
    
    return (
        <>
            
            {/* <h1 className='myTitle text-center mt-5'>Our Products</h1> */}
            <div className="container-fluid titleDiv pb-1">
                <h1 className="myMainTitle text-center pt-5 mb-0">Our Products</h1>
            </div>
            <svg id='mySVG_Product' xmlns="http://www.w3.org/2000/svg" viewBox="0 40 1440 320"><path fill="#F4DECB" fillOpacity="1" d="M0,128L720,192L1440,128L1440,0L720,0L0,0Z"></path></svg>


                <center id='loader'>
                    <div className="spinner-border m-3"></div>
                    <p>Please wait...Amazing products are loading.</p>
                </center>
                
        <div id="myMain_GetAllProducts">

            <div className="container mt-5" id="ourProducts">
                <div className="row">
                    <div className="d-flex flex-wrap justify-content-center">
                        {
                            AllProductsData.map(product => (

                                    <div className="card p-2" key={product.id}>
                                        <Link to={`/product/${product.id}`} target="_blank"><img width="100%" src={product.photos[0]} className="card-img-top"  alt="skd" /></Link>
                                        <div className="card-body">
                                            <h5 className="card-title text-center">{product.title}</h5>
                                        </div>
                                    </div>

                            ))
                        }
                    </div>
                </div>
            </div>

        <Footer />
        </div>
        </>
    )

}

export default GetAllProducts