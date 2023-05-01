import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {uploadFile} from './AWS_s3'

const AdminAdd = () => {

    let [Arr, setArr] = useState([])
    let [n, setN] = useState(1)
    // const {n} = useParams()
    
    useEffect(() => {
        if(!(n>0 && n<=10)){
            alert("problem in url...value should be between 1 to 10")
            document.body.innerHTML = ("problem in url...value should be between 1 to 10")
        }
        else{
            document.title = "Add Product - "+n
            let a = []
            for(let i=1; i<=n; i++){
               a.push(i)
            }
            setArr(a)
        }
    },[n])

    const addProduct = (event) => {
        event.preventDefault()
        const p_id = (document.getElementById(`basic-id`).value).toLowerCase();
        const p_title = document.getElementById(`basic-title`).value;
        const p_price = document.getElementById(`basic-price`).value;
        
        
        
        
        let p_photos = [];
        for(let i=1; i<=n; i++){
            uploadFile(document.getElementById(`basic-photo-url-${i}`).files[0].name)
            p_photos.push(document.getElementById(`basic-photo-url-${i}`).value)
        }


        
        let p_instagram_link = document.getElementById(`Product-Instagram-Link`).value;
        if(!p_instagram_link){
            p_instagram_link = "https://www.instagram.com/rakhi_reshamdhaaga/"
        }

        let productType = document.getElementById(`productType`).value;
        
        if(p_id && p_title && p_price && p_photos && productType){
            console.log(p_photos)

            // fetch("https://reshamdhaaga.herokuapp.com/add_product", {
            //     method: "POST",
            //     body: JSON.stringify({
            //         id: p_id,
            //         product_type: productType,
            //         title: p_title,
            //         price: p_price,
            //         photos: p_photos,
            //         instagram_link : p_instagram_link
            //     }),
            //     headers: {
            //         "Content-type": "application/json"
            //     }
            // })
            // .then(response => response.json())
            // .then(json => alert(json))
            // .catch((error) => alert("product is not added..."+error))
        }
        else{
            alert("provide all data")
        }
    }

  return (
    
    <div className="container mt-5 mb-5">
            <h1 className='text-center myTitle'>Add Product</h1>
            <center>
                <div className="dropdown mt-4">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        select total images to upload
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{"background":"pink"}}>
                        <p className="dropdown-item" onClick={() => setN(1)}>1</p>
                        <p className="dropdown-item" onClick={() => setN(2)}>2</p>
                        <p className="dropdown-item" onClick={() => setN(3)}>3</p>
                        <p className="dropdown-item" onClick={() => setN(4)}>4</p>
                        <p className="dropdown-item" onClick={() => setN(5)}>5</p>
                        <p className="dropdown-item" onClick={() => setN(6)}>6</p>
                        <p className="dropdown-item" onClick={() => setN(7)}>7</p>
                        <p className="dropdown-item" onClick={() => setN(8)}>8</p>
                        <p className="dropdown-item" onClick={() => setN(9)}>9</p>
                        <p className="dropdown-item" onClick={() => setN(10)}>10</p>
                    </div>
                </div>
            </center>

        <div className="row mt-5">

            <div className="col-12">
                <form id='myForm1' onSubmit={addProduct}>

                    {
                        Arr.map(i => (
                            <div key={i}>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Product Photo URL-{i}</span>
                                    <input type="file" accept="image/*" id={`basic-photo-url-${i}`} className="form-control" placeholder="product photo url" aria-label="photo ur1l" aria-describedby="basic-addon1" required />
                                </div>
                            </div>
                        ))
                    }

                    <label htmlFor="productType">Choose product type :- </label>
                    <select id="productType" required>
                        <option value="">choose product type</option>
                        <option value="anklet">anklet</option>
                        <option value="rakhi">rakhi</option>
                        <option value="bracelet">bracelet</option>
                    </select>

                    <div className="input-group mt-3 mb-3">
                        <span className="input-group-text myBackColor">Product Id</span>
                        <input type="text"  id="basic-id" className="form-control" placeholder="product id" aria-label="id" aria-describedby="basic-addon1" required />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text myBackColor">Product Title</span>
                        <input type="text" id="basic-title" className="form-control" placeholder="product title" aria-label="title" aria-describedby="basic-addon1" required />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text myBackColor">Product Price</span>
                        <input type="number" id="basic-price" className="form-control" placeholder="product price" aria-label="price" aria-describedby="basic-addon1" required />
                    </div>

                    <div className="input-group">
                        <span className="input-group-text myBackColor">Product Instagram Link</span>
                        <input type="url" id="Product-Instagram-Link" className="form-control" placeholder="product instagram link" aria-label="photo ur1l" aria-describedby="basic-addon1" />
                    </div>
                    <small className="form-text text-muted"><b>Default link:</b> https://www.instagram.com/rakhi_reshamdhaaga/</small>

                    <div className="btn-group mt-3" role="group" aria-label="Basic example">
                        <button type="reset" className="btn btn-danger">Clear All</button>
                        <button type="submit" className="btn btn-success">Add Product</button>
                        <a type="button" className="btn btn-danger" href='/admin1/delete' target={"_blank"}>Delete</a>
                    </div>

                </form>
            </div>
        </div>
    </div>

  )
}

export default AdminAdd