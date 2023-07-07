import React from "react";
import './navbar.scss';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export const  Navbar = () =>{
    return <div className="navbar">
      <div className="links">
       <Link to='/'> Shop   </Link>
      
     
       <Link to='/cart'> <FontAwesomeIcon icon={faCartShopping} size="2xl"/></Link>
      </div>
    </div>
}