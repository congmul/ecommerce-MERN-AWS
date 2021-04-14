import React from 'react'
import { Link } from "react-router-dom";
import './style.scss';

function Sign() {
    return (
        <div className="signIn-register">
            <div className="signIn-register-left">
                <div id="signIn">
                    <h3 id="title-signIn">Sign In</h3>
                    <form action="/action_page.php">
                        <label for="email" className="custom-margin-signIn-register">Email Address:</label>
                        <input type="text" id="fname" name="email" />
                        <label for="password" className="custom-margin-signIn-register">Password:</label>
                        <input type="password" id="lname" name="password" />
                        <input type="submit" value="SIGN IN" className="custom-margin-signIn-register submit" />
                    </form>
                    <Link to="" className="custom-margin-signIn-register" id="forgot-password">Forgot Your Password?</Link>
                    <div className="myHr custom-myHr"></div>
                    <span className="custom-Or">or</span>
                    <div className="myHr custom-myHr"></div>
                    <div>
                        <button>Sign In With FACEBOOK</button>
                    </div>
                    <div>
                        <button>Sign In With GOOGLE</button>
                    </div>
                </div>
            </div>
            <div className="signIn-register-center"></div>
            <div className="signIn-register-right">
                <div id="signUp">
                    <h3 id="title-signUp">New to KANGJUNG</h3>
                    <form action="/action_page.php">
                        <label for="email" className="custom-margin-signIn-register">Email Address:</label>
                        <input type="text" id="fname" name="email" />
                        <label for="password" className="custom-margin-signIn-register">Password:</label>
                        <input type="password" id="lname" name="password" />
                        <label for="confirm-password" className="custom-margin-signIn-register">Confirm Password:</label>
                        <input type="password" id="lname" name="confirm-password" />
                        
                        <input type="submit" value="REGISTER" className="custom-margin-signIn-register submit" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Sign
