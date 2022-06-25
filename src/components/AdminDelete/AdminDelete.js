import React from 'react'

const AdminDelete = () => {
    
    document.title = "Delete Product"

    const deleteProduct = () => {

        const productID = (document.getElementById("product_id").value).toLowerCase()

        if(productID){
            fetch("https://reshamdhaaga.herokuapp.com/p_delete", {
                method: "DELETE",
                body: JSON.stringify({
                    id: productID,
                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then(response => response.json())
            .then(json => alert(json))
            .catch((error) => alert("product is not deleted..."+error))
        }
        else{
            alert("provide all data")
        }
    }

  return (
    <div className="container mt-5 mb-5">
        <div className="row">
            <div className="col-sm-12">
                <h1 className="myTitle text-center">Delete Product By ID</h1>
                <div className="input-group mt-5">
                    <span className="input-group-text myBackColor">Product Id</span>
                    <input type="text"  id="product_id" className="form-control" placeholder="enter product id" aria-label="id" aria-describedby="basic-addon1" required />
                </div>
                <button onClick={deleteProduct} type="submit" className="btn btn-danger mt-3">Delete Product</button>
            </div>
        </div>
    </div>
  )
}

export default AdminDelete