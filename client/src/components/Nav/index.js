import React from 'react'
import './style.scss';

const Nav = () => {
    return (
        <div class="navBar">
            <ul>
                <li><a href="#">Home</a></li>
                <li class="search-container">
                    <form action="">
                        <input type="text" placeholder="Search.." name="search" />
                            <button type="submit"><i class="fa fa-search"></i></button>
                    </form>
                </li>
                <li class="rightNav"><a href="#">Cart</a></li>
                <li class="rightNav"><a href="#">Orders</a></li>
                <li class="rightNav"><a href="#">Account</a></li>
            </ul>
        </div>
    )
}

export default Nav
