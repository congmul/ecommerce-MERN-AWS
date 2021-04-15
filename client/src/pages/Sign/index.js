import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './style.scss';



function Sign() {

    const [cautionPasswordState, setCautionPasswordState] = useState("none");

    const [caution8State, setCaution8State] = useState("rgb(100, 100, 100)");
    const [cautionSpecialState, setCautionSpecialState] = useState("rgb(100, 100, 100)");
    const [cautionNumberState, setCautionNumberState] = useState("rgb(100, 100, 100)");
    const [cautionLetterState, setCautionLetterState] = useState("rgb(100, 100, 100)");

    function onfocusPassword(){
        setCautionPasswordState("block");
    }
    const handleChange = e => {
        e.preventDefault();
        let userInput = e.target.value.trim();
        // console.log(userInput);

        let isSpecial = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?@";
        let isNumbers = "0123456789";
        let isChars = "abcdefghijklmnopqrstuvwxyz";

        if(userInput.length >= 8){
            setCaution8State("#00c200");
        }else{
            setCaution8State("red");
        }

        if(userInput){
            for(let i = 0; i < userInput.length; i++){
                // console.log(iChars.charAt(userInput[i]));
                if(isSpecial.includes(userInput[i])){
                    setCautionSpecialState("#00c200");
                    return;
                }else{
                    setCautionSpecialState("red");
                }
            }


            for(let i = 0; i < userInput.length; i++){
                if(isNumbers.includes(userInput[i])){
                    setCautionNumberState("#00c200");
                    return;
                }else{
                    setCautionNumberState("red");
                }
            }


            for(let i = 0; i < userInput.length; i++){
                if(isChars.includes(userInput[i])){
                    setCautionLetterState("#00c200");
                    return;
                }else{
                    setCautionLetterState("red");
                }
            }
        }else{
            setCautionSpecialState("red");
            setCautionNumberState("red");
            setCautionLetterState("red");
        }
        
    }

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
                        <input type="password" id="lname" name="password" onFocus={onfocusPassword} onChange={handleChange}/>
                        <div className="caution-password" style={{"display": cautionPasswordState}}>
                            <span style={{"color": caution8State}}>* 8 characters minimum</span>
                            <span style={{"color": cautionSpecialState}}>* At least one special character</span>
                            <span style={{"color": cautionNumberState}}>* At least one number</span>
                            <span style={{"color": cautionLetterState}}>* At least one lowercase letter</span>
                        </div>
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
