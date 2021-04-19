import React, { useState, useEffect } from 'react';

import { Auth } from 'aws-amplify';

function SignUp() {

    const [userNameState, setUserNameState] = useState("");
    const [emailAddressSingUpState, setEmailAddressSingUpState] = useState("");
    const [passWordSingUpState, setPassWordSingUpState] = useState("");
    const [confirmPassWordSingUpState, setConfirmPassWordSingUpState] = useState("");

    const [userConfirmCodeState, setUserConfirmCodeState] = useState("");

    const [emailNOticeStyleState, setEmailNOticeStyleState] = useState("none");
    const [cautionPasswordNoticeStyleState, setCautionPasswordNoticeStyleState] = useState("none");
    const [confirmPasswordNOticeStyleState, setConfirmPasswordNOticeStyleState] = useState("none");

    const [registerButtonState, setRegisterButtonState] = useState("none");
    const [registerDisabledButtonState, setRegisterDisabledButtonState] = useState("block");

    const [caution8State, setCaution8State] = useState("rgb(100, 100, 100)");
    const [cautionSpecialState, setCautionSpecialState] = useState("rgb(100, 100, 100)");
    const [cautionNumberState, setCautionNumberState] = useState("rgb(100, 100, 100)");
    const [cautionLetterState, setCautionLetterState] = useState("rgb(100, 100, 100)");

    async function signUp(userName, email, password) {
        try {
            const { user } = await Auth.signUp({
                username: userName,
                password: password,
                attributes: {
                    email : email,          // optional
                    // other custom attributes 
                }
            });
            console.log(user);
        } catch (error) {
            console.log('error signing up:', error);
        }
    }


    useEffect(() =>{
        if(emailAddressSingUpState && passWordSingUpState && confirmPassWordSingUpState && caution8State === "#00c200" && cautionSpecialState === "#00c200" && cautionNumberState === "#00c200" && cautionLetterState === "#00c200" && emailNOticeStyleState === "none"){
            setRegisterDisabledButtonState("none");
            setRegisterButtonState("block");
        }else{
            setRegisterDisabledButtonState("block");
            setRegisterButtonState("none");
        }

    },[emailAddressSingUpState, passWordSingUpState, confirmPassWordSingUpState, caution8State, cautionSpecialState, cautionNumberState, cautionLetterState, emailNOticeStyleState])

    const handleUserNameChange = (e) =>{
        console.log(e.target.value)
    }

    const handleUserNameFocusOut = (e) => {
        setUserNameState(e.target.value);
        console.log(e.target.value)
    }


    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function onfocusPassword(){
        setCautionPasswordNoticeStyleState("block");
    }

    const handleEmailChange = e =>{
        e.preventDefault();
        let userEmail = e.target.value.trim();
        setEmailAddressSingUpState(userEmail);
    }

    const handleEmailFocusOut = e =>{
        e.preventDefault();
        if(!validateEmail(emailAddressSingUpState)){
            setEmailNOticeStyleState("block")
        }else{
            setEmailNOticeStyleState("none");
        };
    }


    const handlePassWordChange = e => {
        e.preventDefault();
        let userInput = e.target.value.trim();
        setPassWordSingUpState(userInput);

        let isSpecial = "~`!#$%^&*+=-[]\\';,/{}|\":<>?@";
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
                    
                    break;
                }else{
                    setCautionSpecialState("red");
                   
                }
            }


            for(let i = 0; i < userInput.length; i++){
                if(isNumbers.includes(userInput[i])){
                    setCautionNumberState("#00c200");
                    
                    break;
                }else{
                    setCautionNumberState("red");
                   
                }
            }


            for(let i = 0; i < userInput.length; i++){
                if(isChars.includes(userInput[i])){
                    setCautionLetterState("#00c200");
                    
                    break;
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

    const handleConfrimPassWordChange = e =>{
        e.preventDefault();
        let userPassword = e.target.value.trim();
        setConfirmPassWordSingUpState(userPassword);
    }

    const submitSignUp = e => {
        e.preventDefault();
       if(passWordSingUpState !== confirmPassWordSingUpState){
            setConfirmPasswordNOticeStyleState("block");
            console.log("Something wrong")
       }else{
            setConfirmPasswordNOticeStyleState("none");
            signUp(userNameState, emailAddressSingUpState, passWordSingUpState);
       }
    }

    const confirmChange = e => {
        e.preventDefault();
        let userconfirm = e.target.value.trim();
        console.log(userconfirm)
        setUserConfirmCodeState(userconfirm);

    }
    const confirmCode = (e) => {
        e.preventDefault();

        confirmSignUp(userNameState, userConfirmCodeState)
        .then(() => console.log('confirmed'));

        async function confirmSignUp(email, code) {
            try {
              await Auth.confirmSignUp(email, code);
            } catch (error) {
                console.log('error confirming sign up', error);
            }
        }

    }

    return (
            <div className="signIn-register-right">
                <div id="signUp">
                    <h3 id="title-signUp">New to KANGJUNG</h3>
                    <form>
                        <label className="custom-margin-signIn-register">User name:</label>
                        <input type="text" onChange={handleUserNameChange} onBlur={handleUserNameFocusOut}/>
                        
                        <label className="custom-margin-signIn-register">Email Address:</label>
                        <input type="text" id="signUp-email" name="signUp-email" onChange={handleEmailChange} onBlur={handleEmailFocusOut}/>
                        <div className="caution-confirm-password" style={{"display": emailNOticeStyleState}}>
                        <span style={{"color": "red", "marginBottom": "3px"}}>The email you entered is invalid.</span>
                        <span style={{"color": "red"}}>Please check your email and try again.</span>
                        </div>
                        <label className="custom-margin-signIn-register">Password:</label>
                        <input type="password" id="signUp-password" name="signUp-password" onFocus={onfocusPassword} onChange={handlePassWordChange}/>
                        <div className="caution-password" style={{"display": cautionPasswordNoticeStyleState}}>
                            <span style={{"color": caution8State}}>* 8 characters minimum</span>
                            <span style={{"color": cautionSpecialState}}>* At least one special character</span>
                            <span style={{"color": cautionNumberState}}>* At least one number</span>
                            <span style={{"color": cautionLetterState}}>* At least one lowercase letter</span>
                        </div>
                        <label className="custom-margin-signIn-register">Confirm Password:</label>
                        <input type="password" id="confirm-password" name="confirm-password" onChange={handleConfrimPassWordChange} />
                        <div className="caution-confirm-password" style={{"display": confirmPasswordNOticeStyleState}}>
                        <span style={{"color": "red"}}>Your passwords do not match, please try again.</span>
                        </div>
                        <button className="custom-margin-signIn-register submit" onClick={submitSignUp} style={{"display": registerButtonState}}>REGISTER</button>
                        <button className="custom-margin-signIn-register submit" onClick={submitSignUp} disabled style={{"display": registerDisabledButtonState}}>REGISTER</button>
                    </form>
                <br />
                <input id="userCode" onChange={confirmChange}/>
                <button id="confirmBtn" className="submit" onClick={confirmCode}>Confirm</button>
                </div>

            </div>
    )
}

export default SignUp
