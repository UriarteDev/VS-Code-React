import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>    
        <nav class="nav dark-nav">
          <div class="container">
            <div class="nav-heading">
              <button class="toggle-nav" data-toggle="open-navbar1"><i class="fa fa-align-right"></i></button>
              <a class="brand" href="#">mirazimi</a>
            </div>
            <div class="menu" id="open-navbar1">
              <ul class="list">
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/Cliente"}>Cliente</Link></li>
                <li><Link to={"/Producto"}>Producto</Link></li>
                <li><Link to={"/Proveedor"}>Proveedor</Link></li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Header