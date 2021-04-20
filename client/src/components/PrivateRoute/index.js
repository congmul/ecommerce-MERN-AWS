import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'

function PrivateRoute({ component: Component, ...rest}) {

    const { userName } = useAuth()
    // console.log(userName);
    return (
        <Route
            {...rest}
            render={props=>{
               return userName === 'admin' ? <Component {...props} /> : <Redirect to="/" />
            }}
        >          
        </Route>
    )
}

export default PrivateRoute;
