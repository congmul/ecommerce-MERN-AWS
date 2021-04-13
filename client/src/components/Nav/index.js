import React from 'react'
import { Link } from "react-router-dom";
import './style.scss';

import logo from '../../assets/img/logo_kangjung.png'

const Nav = () => {
    return (
        <div className="navBar">
            <ul>
                <li className="leftNav"><Link to="/">WOMEN</Link></li>
                <li className="leftNav"><Link to="/">MEN</Link></li>
                <li className="leftNav"><Link to="/">KIDS</Link></li>
            </ul>
            <ul>
                <li>
                    <Link to="/"><img src={logo} height="45px" alt="logo" /></Link>
                </li>
            </ul>
            <ul>
                <li className="rightNav"><Link to="/"><i className="far fa-heart"></i> 0</Link></li>
                <li className="rightNav"><Link to="/"><i className="fas fa-shopping-cart"></i> 0</Link></li>
                <li className="rightNav"><Link to="/"><i className="far fa-user"></i></Link></li>
                <li className="search-container rightNav">
                    <form action="">
                        <input type="text" placeholder="Search" name="search" />
                            <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                </li>
            </ul>
        </div>
    )
}

export default Nav
