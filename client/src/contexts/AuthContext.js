import React, {useContext, useState, useEffect} from 'react';
import { Auth, Hub } from 'aws-amplify'

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [ userName, updateUserName] = useState(null);

    // function signUp(username, password) {
    //     return Auth.signUp(username, password);
    // }

    // function signIn(username, password){
    //     return Auth.signIn(username, password)
    // }

    function logout() {
        return Auth.signOut();
    }

    useEffect(() => {
        checkUser()
        setAuthListener()
      }, [])

      async function checkUser() {
        try {
          const user = await Auth.currentAuthenticatedUser()
        //   console.log("user : ", user);
          updateUserName(user.username)
        } catch(err){
          console.log("SignedIn : False")
          updateUserName(null)
        }
      }

      async function setAuthListener(){
        Hub.listen('auth', data => {
          switch (data.payload.event){
            case 'signIn':
              console.log('data from event: ', data.payload.data)
              updateUserName(data.payload.data);
              break;
            case 'signOut':
              console.log('data from event: ', data)
              updateUserName(null);
              break;
            default:
              break;
          }
        })
      }
    // function resetPassword(email) {
    //     return Auth.sendPasswordResetEmail(email)
    // }

    const value = {
        userName,
        // login,
        // signup,
        logout, 
        // resetPassword
    }

    return (
        <AuthContext.Provider value={value}>
            { children } 
        </AuthContext.Provider>
    )    

}
