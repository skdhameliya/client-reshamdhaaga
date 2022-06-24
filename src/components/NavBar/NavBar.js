import React from 'react'

const NavBar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light sticky-top">
            <a className="navbar-brand" href="#">Welcome</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#aboutUs">About Us</a>
                </li>
                <a className="nav-item nav-link" href="#ourProducts">Our Products</a>
                <a className="nav-item nav-link" href="#ourCustomers">Our Customers</a>
                <a className="nav-item nav-link" href="#contactUs">Contact Us</a>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default NavBar