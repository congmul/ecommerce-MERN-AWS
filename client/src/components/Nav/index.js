import React from 'react'
import './style.scss';

const Nav = () => {
    return (
        <div className="navBar">
            <ul>
                <li><a href="#">Home</a></li>
                <li className="search-container">
                    <form action="">
                        <input type="text" placeholder="Search.." name="search" />
                            <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                </li>
                <li className="rightNav"><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
                <li className="rightNav"><a href="#">Orders</a></li>
                <li className="rightNav"><a href="#">Account</a></li>
            </ul>
        </div>
    )
}

export default Nav
