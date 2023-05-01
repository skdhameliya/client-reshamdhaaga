import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './GetSomeProductsForIndexPage.css'


const GetSomeProductsForIndexPage = () => {

    let [SomeProductsData, setSomeProductsData] = useState([]);
    useEffect(() => {
        if(sessionStorage.getItem("tempData")){
            setSomeProductsData(JSON.parse(sessionStorage.getItem("tempData")))
            document.getElementById("loader").style.display = "none";
            document.getElementById("myMain_GetAllProducts").style.display = "block";
        }else{
            fetch(`https://gold-caridea-kilt.cyclic.app/all_products/1/rakhi`)
                .then( (response) => {
                    return response.json()
                } )
                .then( (jsonData) => {
                    if(jsonData){
                        setSomeProductsData(jsonData);
                        sessionStorage.setItem("tempData", JSON.stringify(jsonData))
                        document.getElementById("loader").style.display = "none";
                        document.getElementById("myMain_GetAllProducts").style.display = "block";
                    }
                } )
                .catch( (error) => {
                    console.log("error==>"+error)
                } );
        }
    },[]);

    return (
        <>
            <h1 className='myTitle text-center'>Our Products</h1>
                <center id='loader'>
                    <div className="spinner-border m-3"></div>
                    <p>Please wait...Amazing products are loading.</p>
                </center>
                
        <div id="myMain_GetAllProducts">

            <div className="container mt-5" id="ourProducts">
                <div className="row">
                    <div className="d-flex flex-wrap justify-content-center">
                        {
                            SomeProductsData.map(product => (
                                    <div className="card" key={product.id}>
                                        <Link to={`/product/${product.id}`} target="_blank"><img width="100%" src={product.photos[0]} className="card-img-top"  alt="Reshamdhaaga" /></Link>
                                        <div className="card-body">
                                            <h5 className="card-title text-center">{product.title}</h5>
                                        </div>
                                    </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <Link to={`/shop`}>
                <center><button className="btn btn-success mt-3">Go To Store</button></center>
            </Link>

        </div>
        </>
    )
}


export default GetSomeProductsForIndexPage