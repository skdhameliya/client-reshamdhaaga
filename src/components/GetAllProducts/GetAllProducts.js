import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Footer from '../Footer/Footer'

const GetAllProducts = () => {

    let [AllProductsData, setAllProductsData] = useState(JSON.parse(sessionStorage.getItem("AllProductsData")))

    useEffect(() => {
        if(AllProductsData != null){    
            document.getElementById("loader").style.display = "none";
            document.getElementById("myMain_GetAllProducts").style.display = "block";
        }else{
            alert("Products Not Found")
        }
    }, [])
    
    const filterBy = (filterByValue) => {
        filterByValue = filterByValue.toLowerCase()
        AllProductsData = JSON.parse(sessionStorage.getItem("AllProductsData"))
        const filteredData = AllProductsData.filter(product => product.product_type === filterByValue)
        setAllProductsData(filteredData)
    }
    
    return (
        <>
            
            {/* <h1 className='myTitle text-center mt-5'>Our Products</h1> */}
            <nav className="navbar navbar-expand-lg navbar-light sticky-top">
                <a className="navbar-brand" href="#">Filter By</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link" onClick={()=>filterBy("Anklet")} href="#">Anklet</a>
                        <a className="nav-item nav-link" onClick={()=>filterBy("Rakhi")} href="#">Rakhi</a>
                        <a className="nav-item nav-link" onClick={()=>filterBy("Bracelet")} href="#">Bracelet</a>
                    </div>
                </div>
            </nav>
            <div className="container-fluid titleDiv pb-1">
                <h1 className="myMainTitle text-center mb-0">Our Products</h1>
            </div>
            <svg id='mySVG_Product' xmlns="http://www.w3.org/2000/svg" viewBox="0 40 1440 320"><path fill="#F4DECB" fillOpacity="1" d="M0,128L720,192L1440,128L1440,0L720,0L0,0Z"></path></svg>


                <center id='loader'>
                    <div className="spinner-border m-3"></div>
                    <p>Please wait...Amazing products are loading.</p>
                </center>
                
        <div id="myMain_GetAllProducts">

            <div className="container" id="ourProducts">
                <div className="row">
                    <div className="d-flex flex-wrap justify-content-center">
                        {
                            AllProductsData.map(product => (

                                    // return (
                                        <div className="card p-2" key={product.id}>
                                            <Link to={`/product/${product.id}`} target="_blank"><img width="100%" src={product.photos[0]} className="card-img-top"  alt="skd" /></Link>
                                            <div className="card-body">
                                                <h5 className="card-title text-center">{product.title}</h5>
                                            </div>
                                        </div>
                                    // )

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