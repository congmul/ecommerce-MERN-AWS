import React from 'react'
import './style.scss';

import SignUp from '../../components/SignUp'
import SignIn from '../../components/SignIn'

function Sign() {

    return (
        <div className="signIn-register">
            <SignIn />
        <div className="signIn-register-center"></div>
            <SignUp />
        </div>
    )
}

export default Sign
