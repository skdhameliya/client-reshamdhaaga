import React, { useState, useEffect, Component } from "react";
import '../components/GetAllProducts.css'
import { Link } from "react-router-dom";
import Footer from "./Footer/Footer"
import OurCustomers from "./Our Customers/OurCustomers";
import AboutUs from "./About Us/AboutUs";
import NavBar from "./NavBar/NavBar";

const GetAllProducts = () => {

    const [AllProductsData, setAllProductsData] = useState([]);

    useEffect(() => {
        fetch("https://reshamdhaaga.herokuapp.com/all_products")
        .then( (response) => {
            return response.json()
        } )
        .then( (jsonData) => {
            if(jsonData){
                document.getElementById("loader").style.display = "none";
                document.getElementById("myMain_GetAllProducts").style.display = "block";
            }
            jsonData.reverse()
            setAllProductsData(jsonData);
            console.log("all ");
            console.log(JSON.stringify(AllProductsData));
        } )
        .catch( (error) => {
            console.log(error)
        } );
    },[]);

    return (
        <>
                <center id='loader'>
                    <div className="spinner-border mt-5"></div>
                    <p>Please wait...Amazing products are loading.</p>
                </center>
                
        <div id="myMain_GetAllProducts">
        <NavBar />

            <div className="container-fluid pb-1" style={{"background":"#6E2C00"}}>
                <h1 className="myTitle text-center pt-5 mb-0">Reshamdhaaga</h1>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 40 1440 320"><path fill="#6E2C00" fillOpacity="1" d="M0,128L720,192L1440,128L1440,0L720,0L0,0Z"></path></svg>

            <AboutUs />

            <div className="container" id="ourProducts">
                <h1 className='myTitle text-center mb-5' style={{"color":"#6E2C00"}}>Our Products</h1>
                <div className="row justify-content-center">
                    {/* <div className="col-12"> */}
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
                    {/* </div> */}
                </div>
            </div>

            <OurCustomers />    
            <Footer />
        </div>
        </>
    )
}


export default GetAllProducts;