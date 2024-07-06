import React from 'react'
import { Link } from 'react-router-dom';

const links = [
  {
    name: "Cliente",
    href: "/Cliente"
  },
  {
    name: "Producto",
    href: "/Producto"
  }
];

const Header = () => {
  return (
    <div>
         
        <nav class="nav dark-nav">
          <div class="container">
            <div class="nav-heading">
              <button class="toggle-nav" data-toggle="open-navbar1"><i class="fa fa-align-right"></i></button>
              <a class="brand">mirazimi</a>
            </div>
            <div class="menu" id="open-navbar1">
              <ul class="list">
              {links.map((x) => (  
              <li><Link to={x.href}>{x.name}</Link></li>
                ))}  
              </ul>
            </div>
          </div>
        </nav>
       
    </div>
  )
}

export default Header
