import React from 'react'
import './style.scss';

import logo from '../../assets/img/logo_kangjung.png'

const Nav = () => {
    return (
        <div className="navBar">
            <ul>
                <li className="leftNav"><a href="#">WOMEN</a></li>
                <li className="leftNav"><a href="#">MEN</a></li>
                <li className="leftNav"><a href="#">KIDS</a></li>
            </ul>
            <ul>
                <li>
                    <a href="#"><img src={logo} height="45px" alt="logo" /></a>
                </li>
            </ul>
            <ul>
                <li className="rightNav"><a href="#"><i class="far fa-heart"></i> 0</a></li>
                <li className="rightNav"><a href="#"><i class="fas fa-shopping-cart"></i> 0</a></li>
                <li className="rightNav"><a href="#"><i class="far fa-user"></i></a></li>
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
