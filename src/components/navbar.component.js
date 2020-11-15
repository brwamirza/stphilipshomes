import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

render () {
    return (
        <div className="d-flex">
            <ul class="nav">
                <li class="nav-item">
                    <Link class="nav-link active" href="#">FIND YOUR NEW HOME</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" href="#">BYING WITH US</Link>
                </li>
            </ul>
                <div>
                 <Link class="nav-link" href="#">LOGO</Link>
                </div>
            <ul class="nav">
                <li class="nav-item">
                    <Link class="nav-link" href="#">ABOUT</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" href="#">CONTACT</Link>
                </li>
            </ul>
        </div>
    );
}
}