import photo from './images/logo.png';
import React from 'react';
import './NavbarStyles.css';

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
                <a href="Home.js">Home</a>
                <a href="Service.js">Service</a>
                <a href="About.js">About</a>
                <a href="Contact.js">Contact</a>
                <a href="Hire.js"><button>Hire</button></a>
            </li>
        </ul>
 </nav>
  );
}

export default Navbar;

