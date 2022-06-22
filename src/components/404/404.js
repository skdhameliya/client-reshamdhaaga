import React from 'react'
import { Link } from "react-router-dom";

const NotFound_404 = () => {
  return (
    <div className='text-center'>
        <h1 className="m-5 myTitle">404 Page Not Found...!</h1>
        <Link to={`/`} ><p>click here to go home</p></Link>
    </div>
  )
}

export default NotFound_404