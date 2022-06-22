import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const AdminAdd = () => {

    let [Arr, setArr] = useState([])
    const {n} = useParams()
    
    useEffect(() => {
        if(!(n>0 && n<=10)){
            alert("problem in url...value should be between 1 to 10")
            document.body.innerHTML = ("problem in url...value should be between 1 to 10")
        }
        else{
            let a = []
            for(let i=1; i<=n; i++){
               a.push(i)
            }
            setArr(a)
        }
    },[])

    const addProduct = (event) => {
        event.preventDefault()
        const p_id = (document.getElementById(`basic-id`).value).toLowerCase();
        const p_title = document.getElementById(`basic-title`).value;
        const p_price = document.getElementById(`basic-price`).value;
        let p_photos = [];
        for(let i=1; i<=n; i++){
            p_photos.push(document.getElementById(`basic-photo-url-${i}`).value)
        }
        
        if(p_id && p_title && p_price && p_photos){
            fetch("https://reshamdhaaga.herokuapp.com/add_product", {
                method: "POST",
                body: JSON.stringify({
                    id: p_id,
                    title: p_title,
                    price: p_price,
                    photos: p_photos
                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then(response => response.json())
            .then(json => alert(json))
            .catch((error) => alert("product is not added..."+error))
        }
        else{
            alert("provide all data")
        }
    }

  return (
    
    <div className="container mt-5 mb-5">
        <div className="row">
            <div className="col-12">
                <h1 className='text-center myTitle mb-5'>Add Product</h1>
                <form id='myForm1' onSubmit={addProduct}>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Product Id</span>
                        <input type="text"  id="basic-id" className="form-control" placeholder="product id" aria-label="id" aria-describedby="basic-addon1" required />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Product Title</span>
                        <input type="text" id="basic-title" className="form-control" placeholder="product title" aria-label="title" aria-describedby="basic-addon1" required />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Product Price</span>
                        <input type="number" id="basic-price" className="form-control" placeholder="product price" aria-label="price" aria-describedby="basic-addon1" required />
                    </div>
                    {
                        Arr.map(i => (
                            <div key={i}>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Product Photo URL {i}</span>
                                    <input type="url" id={`basic-photo-url-${i}`} className="form-control" placeholder="product photo url" aria-label="photo ur1l" aria-describedby="basic-addon1" required />
                                </div>
                            </div>
                        ))
                    }
                    <button type="submit" className="btn btn-success">Add Product</button>
                </form>
            </div>
        </div>
    </div>
    
    
    
  )
}

export default AdminAdd