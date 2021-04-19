import React from 'react'
import { Link } from "react-router-dom";
import { Auth } from 'aws-amplify';

function SignIn() {

    async function checkUser(){
        const user = await Auth.currentAuthenticatedUser()
        console.log('user: ', user)
    }

    return (
        <div className="signIn-register-left">
            <div id="signIn">
                <h3 id="title-signIn">Sign In</h3>
                <form action="/api/signIn">
                    <label className="custom-margin-signIn-register">Email Address:</label>
                    <input type="text" id="fname" name="email" />
                    <label className="custom-margin-signIn-register">Password:</label>
                    <input type="password" id="lname" name="password" />
                    <input type="submit" value="SIGN IN" className="custom-margin-signIn-register submit" />
                </form>
                <Link to="" className="custom-margin-signIn-register" id="forgot-password">Forgot Your Password?</Link>
                <div className="myHr custom-myHr"></div>
                <span className="custom-Or">or</span>
                <div className="myHr custom-myHr"></div>
                <div>
                    <button onClick={() => Auth.federatedSignIn({ provider: "Facebook" })}>Sign In With Facebook</button>
                </div>
                <div>
                    <button onClick={() => Auth.federatedSignIn({ provider: "Google" })}>Sign In With GOOGLE</button>
                </div>
                <div>
                    <button onClick={() => Auth.federatedSignIn()}>Sign In</button>
                </div>
                <div>
                    <button onClick={ checkUser }>Check User</button>
                </div>
            </div>
        </div>
    )
}

export default SignIn
