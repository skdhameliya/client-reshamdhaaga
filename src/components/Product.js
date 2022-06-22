import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

// require("./Payments/Payment.js")
import { Payment } from './Payments/Payment';
import Footer from './Footer/Footer';
import GetAllProducts from './GetAllProducts';
import './Product.css'

const Product = () => {
  
  const {productID} = useParams();

  let [Product1, setProduct1] = useState([]);
  let [ProductPhotos, setProductPhotos] = useState([])
 
  useEffect(() => {
    fetch(`https://reshamdhaaga.herokuapp.com/product/${productID}`)
    .then( (apiData) => {
        return apiData.json()
    } )
    .then( (actualData) => {
      if(actualData){
        document.getElementById("loaderSpinner").style.display = "none"
        document.getElementById("myMain_Product").style.display = "block"
        setProduct1(actualData)
        setProductPhotos(actualData.photos)
      }else{
        alert("Product Not Found")
        window.location.href = "/"
      }
        
    } )
    .catch( (error) => {
        console.log(error)
    } )
  }, [])

  
  const checkAddress = () => {
    const user_address = document.getElementById("user_address").value
    let quantity = document.getElementById("quantityNo").value
    if(!quantity || quantity <= 0){
      quantity = 1
    }
    if(user_address){
      Payment(Product1.title,Product1.price, user_address, quantity)
    }else{
      alert("please provide the address")
    }
  }

  // const noOfQuantity = (n) => {
  //   let x = Number(document.getElementById("quantityNo").value)
  //   console.log(x);

  //   x = x+n
  //   if(x<0){
  //     document.getElementById("quantityNo").value = 0
  //   }else{
  //     document.getElementById("quantityNo").value = x
  //   }
  // }

  return (
    
    <>
        <center><div id='loaderSpinner' className="spinner-border mt-5"></div></center>

    <div id='myMain_Product'>
      
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250"><path fill="#6E2C00" fillOpacity="1" d="M0,128L720,192L1440,128L1440,0L720,0L0,0Z"></path></svg> */}

      <div className="container-fluid pb-1" style={{"background":"#6E2C00"}}>
        <h1 className="myTitle text-center pt-5 mb-0">{Product1.title}</h1>
      </div>
      <svg id='mySVG_Product' xmlns="http://www.w3.org/2000/svg" viewBox="0 40 1440 320"><path fill="#6E2C00" fillOpacity="1" d="M0,128L720,192L1440,128L1440,0L720,0L0,0Z"></path></svg>


      <div className="container container_Product">
            <div className="d-flex flex-wrap justify-content-center">
            {
              ProductPhotos.map(i => (
                <div className="col-sm-6" key={i}>
                    <a href={i} target="_blank"><img className="d-block w-100 pt-2" src={i} alt="skd" /></a>
                </div>
              ))
            }
            </div>


          <div className="d-flex flex-column bd-highlight mt-5 ml-3">
            <div className="bd-highlight">
              <p className="bd-highlight"><b>Price : </b><b style={{"color":"green"}}>&#8377; {Product1.price}</b></p>
              
              <div className="bd-highlight">
                <b>Add Quantity : </b>
                <div className="btn-group" role="group" aria-label="Basic example">
                  {/* <button type="button" onClick={() => noOfQuantity(-1)} className="btn btn-secondary">-</button> */}
                  <input type="number" min={1} id='quantityNo' placeholder='  add quantity' />
                  {/* <button type="button" onClick={() => noOfQuantity(1)} className="btn btn-secondary">+</button> */}
                </div>
              </div> 
              
            </div>
            <div className="bd-highlight mt-3">
              <button className="btn btn-success bd-highlight" data-toggle="modal" data-target="#myModal">Buy</button>
            </div>
          </div>

      </div>


      <div className="modal fade" id="myModal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
          
            <div className="modal-header">
              <h4 className="modal-title">Add Your Delivery Address</h4>
              <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>
            
            <div className="modal-body">
              <div className="input-group">
                <span className="input-group-text">Address</span>
                <input type="text" id="user_address" className="form-control" placeholder="enter full delivery address" required />
                <small className="form-text text-muted"><b>Format:</b> House no, Society Name, Landmark Name, City-Pincode, State, Country</small>
              </div>
              
              <div className="btn-group mt-3" role="group" aria-label="Basic example">
                <a className="btn btn-success" href={`https://wa.me/+918980129712?text=Hi, I am Looking for ${window.location.href}`} type="button" target="_blank">WhatsApp</a>
                <button id="rzp-button1" onClick={checkAddress} className="btn btn-info">Buy</button>
              </div>
              
              
            </div>
            
          </div>
        </div>
      </div>

      <Footer />
    </div>
    </>
  )
}

export default Product
