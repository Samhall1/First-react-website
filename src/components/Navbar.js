import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = (props) => {
    return (
        <nav className="whole">
              
            <h1 className="title">The $hop </h1>
          
            <ul className="buttons">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Accessories">Accessories</Link></li>
                <li>Cart: <span>{props.basketNumbers}</span></li>
            </ul>
        </nav>
    )
}

export default Navbar;