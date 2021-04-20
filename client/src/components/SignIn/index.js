import React from 'react'
import { Link } from "react-router-dom";
import { Auth } from 'aws-amplify';
import { useHistory } from "react-router-dom";

function SignIn() {
    const history = useHistory();

    async function checkUser(){
        const user = await Auth.currentAuthenticatedUser()
        console.log('user: ', user)
        return user;
    }

    checkUser().then(user => {
        console.log(user);
    })

    const signInFunc = (e) => {
        e.preventDefault();
        let username = e.target.username.value;
        let password = e.target.password.value;

        signIn(username, password)

        async function signIn(username, password) {
            try {
                const user = await Auth.signIn(username, password);
                console.log(user);
                history.push("/");
            } catch (error) {
                console.log('error signing in', error);
            }
        }
    }

    return (
        <div className="signIn-register-left">
            <div id="signIn">
                <h3 id="title-signIn">Sign In</h3>
                <form onSubmit={signInFunc}>
                    <label className="custom-margin-signIn-register">User Name:</label>
                    <input type="text" id="fname" name="username" />
                    <label className="custom-margin-signIn-register">Password:</label>
                    <input type="password" id="lname" name="password" />
                    <input type="submit" value="SIGN IN" className="custom-margin-signIn-register submit" />
                </form>
                <Link to="" className="custom-margin-signIn-register" id="forgot-password">Forgot Your Password?</Link>
                <div className="myHr custom-myHr"></div>
                <span className="custom-Or">or</span>
                <div className="myHr custom-myHr"></div>
            </div>
        </div>
    )
}

export default SignIn
