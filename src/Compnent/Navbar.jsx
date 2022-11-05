import React from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css';
const Navbar =() =>{
  return (
    <div>
      <nav>
         <div className="logo">
            API HUB
         </div>
         <input type="checkbox" id="click"/>
         <label htmlFor="click" className="menu-btn">
         <i className="fas fa-bars"></i>
         </label>
         <ul>
            <li><Link to="/general">GENERAL</Link></li>
            <li><Link to="/business">BUSINESS</Link></li>
            <li><Link to="/sport">SPORTS</Link></li>
            <li><Link to="/health">HEALTH</Link></li>
            <li><Link to="/technology">TECHNOLOGY</Link></li>
         </ul>
      </nav>
    </div>
  )
}
export default Navbar