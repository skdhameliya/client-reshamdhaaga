import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const AdminUpdate = () => {

    document.title = "Update Product"
    
    let [Product1, setProduct1] = useState([]);

    const getProductDetail = (event) => {
        event.preventDefault()
        const productID = (document.getElementById("product_id").value).toLowerCase()

        if(productID){
            fetch(`https://reshamdhaaga.herokuapp.com/product/${productID}`)
                .then( (apiData) => {
                    return apiData.json()
                } )
                .then( (actualData) => {
                if(actualData){
                    // document.getElementById("loaderSpinner").style.display = "none"
                    // document.getElementById("myMain_Product").style.display = "block"
                    setProduct1(actualData)
                    document.getElementById(`Product-Instagram-Link`).value = actualData.instagram_link
                }else{
                    alert("Product Not Found")
                }
                    
                } )
                .catch( (error) => {
                    console.log(error)
                } )
        }
        else{
            alert("please provide product id")
        }
    }

    const updateProduct = (event) => {
        event.preventDefault()
        let p_instagram_link = document.getElementById(`Product-Instagram-Link`).value;
        fetch("https://reshamdhaaga.herokuapp.com/p_update", {
                method: "PATCH",
                body: JSON.stringify({
                    id: Product1.id,
                    instagram_link : p_instagram_link
                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then(response => response.json())
            .then(json => alert("==>"+json))
            .catch((error) => alert("product is not updated..."+error))
    }

  return (
    <>
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-sm-12">
                    <h1 className="myTitle text-center">Update Product By ID</h1>
                    <form onSubmit={getProductDetail}>
                        <div className="input-group mt-5">
                            <span className="input-group-text myBackColor">Product Id</span>
                            <input type="text"  id="product_id" className="form-control" placeholder="enter product id" aria-label="id" aria-describedby="basic-addon1" required />
                        </div>
                        <button type="submit" className="btn btn-danger mt-3">Get Product Detail</button>
                    </form>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <form onSubmit={updateProduct}>
                        <div className="input-group">
                            <span className="input-group-text myBackColor">Product Instagram Link</span>
                            <input type="url" id="Product-Instagram-Link" className="form-control" placeholder="product instagram link" aria-label="photo ur1l" aria-describedby="basic-addon1" required />
                        </div>
                        <small className="form-text text-muted"><b>Default link:</b> https://www.instagram.com/rakhi_reshamdhaaga/</small> 
                        <div className="btn-group mt-3" role="group" aria-label="Basic example">
                            <button type="reset" className="btn btn-danger">Clear</button>
                            <button type="submit" className="btn btn-success">Update Product</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        {
            console.log("=="+Product1.id)
        }


    </>
  )
}

export default AdminUpdate