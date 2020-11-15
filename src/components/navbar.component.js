import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../styles/navbar.scss";

export default class Navbar extends Component {

render () {
    return (
        <div id="navbar">
            <div className="d-flex header header--transparent header__container container">
                <ul className="nav">
                    <li className="nav-item header__navItem">
                        <Link className="nav-link" to="#">FIND YOUR NEW HOME</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">BYING WITH US</Link>
                    </li>
                </ul>
                    <div>
                    <Link className="nav-link" to="#"><svg xmlns="http://www.w3.org/2000/svg" width="152" height="75"></svg></Link>
                    </div>
                <ul className="nav">
                    <li className="nav-item header__navItem">
                        <Link className="nav-link" to="#">ABOUT</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">CONTACT</Link>
                    </li>
                </ul>
            </div>
        </div>
        
    );
}
}