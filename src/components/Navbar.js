import React, {useState} from "react";
import logo  from './logo.png';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';



function Navbar(){
    
  
    
    return(
       <>
       <nav className="navbar">
       
        <img src={logo}
       
        width={201}
        height={52}/>
        
        

       
        <ul className="nav-menu" class1="nav-menu.active">
            <li className="nav-items">
              <Link to='/Home' className="nav-links" >
                Home
                
                </Link>
            </li>
            <li className="nav-items" >
              <Link to='/Doctors' className="nav-links" >
                Doctors
                
              </Link>
              
            </li>
            <li className="nav-items">
              <Link to="/Patients" className="nav-links" >
                Patients
                </Link>
                
            </li>
            <li className="nav-items">
              <Link to='/Pharmacy' className="nav-links" >
                Pharmacy
                </Link>
                
            </li>
            <li className="nav-items">
              <Link to='/' className="nav-links" >
                pages
                </Link>
            </li>
            <li className="nav-items">
              <Link to='/' className="nav-links" >
                Blog
              </Link>
            </li>
            <li className="nav-items">
              <Link to='/'className="nav-links" >
                Admin
                </Link>

            </li>

        </ul>
       <Button/>

       </nav>
       </>
    )
}
export default Navbar;