import React, { useState }  from 'react'
import { Link } from "react-router-dom";
import './style.scss';

import logo from '../../assets/img/logo_kangjung.png'
import Auth from '@aws-amplify/auth';

const Nav = (props) => {
    console.log(props.user)

    const [ user, setUser ] = useState(null);

    return (
        <div className="navBar">
            <div className="nav-left">
                <Link to="/" className="nav-title">WOMEN</Link>
                <Link to="/" className="nav-title">MEN</Link>
                <Link to="/" className="nav-title">KIDS</Link>
                {props.user ? (props.user.username === "admin" ? (<Link to="/admin" className="nav-title">ADMIN PAGE</Link>) : (<></>)) : <></> }
            </div>
            <div className="nav-center">
                <Link to="/"><img src={logo} height="45px" alt="logo" /></Link>
            </div>
            <div className="nav-search">
                <div className="search-container">
                    <form action="">
                        <input type="text" placeholder="Search" name="search" />
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                </div>
            </div>
            
            <div className="nav-right">
                <div className="dropdown" id="sign">
                    <div className="nav-icon">
                    <Link to="/sign"><i className="far fa-user dropbtn" ></i></Link>
                    </div>
                    <div className="dropdown-content">
                        {props.user ? (
                        <>
                        <div className="hello-userName">Hello {props.user.username.toUpperCase()}</div>
                        <Link to ="" onClick={()=> {Auth.signOut(); setUser(null)}}>Sign Out</Link>
                        <div className="myHr"></div>
                        <Link to="#">My Orders</Link>
                        <Link to="#">My Message</Link>
                        <Link to="#">Recently Viewed</Link>
                        </>
                        ): (<Link to="/sign">Sign In / Register</Link>)}
                    </div>
                </div>
                <div className="dropdown">
                    <div className="nav-icon">
                    <Link to="/"><i className="fas fa-shopping-cart"></i> 0</Link>
                    </div>
                    <div className="dropdown-content">
                        {/* <Link to="#">CART BOX</Link> */}
                        <span style={{"color":"rgb(100, 100, 100)"}}>
                            <span>Shopping Bag is Empty</span>
                            Welcome back! If you had items in your shopping bag, we have saved them for you. You can <Link to="/sign" style={{"float":"right"}}>SIGN IN</Link>now to see them, or whenever you're ready to check out.
                        </span>
                    </div>
                </div>
                <div className="dropdown">
                    <div className="nav-icon">
                    <Link to="/"><i className="far fa-heart"></i> 0</Link>
                    </div>
                    <div className="dropdown-content">
                        <Link to="#">Favorite Item</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
