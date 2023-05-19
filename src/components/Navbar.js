import photo from './images/logo.png';
import React from 'react';
import './NavbarStyles.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Navbar() {
 
  return (
    <nav>
       <input type="checkbox" class="myCheckBox" id="myCheck" />
  <label for="myCheck" class="checkButton">
      <i class="fa fa-bars"></i>
  </label>
   <img src={photo} alt="" />
        <ul>
            <li>  
                <a href='./Contact.js'>Home</a>
                <a >Service</a>
                <a >About</a>
                <a >Contact</a>
                <button>Hire</button>
            </li>
        </ul>
 </nav>
  );
}

export default Navbar;

