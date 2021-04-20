import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';

import { AuthProvider } from './contexts/AuthContext'

import PrivateRoute from './components/PrivateRoute';

import Admin from './pages/Admin';
import Nav from './components/Nav';
import Sign from './pages/Sign';
import Products from './pages/Products';
import Footer from './components/Footer';

import { Auth, Hub } from 'aws-amplify'

function App() {
  const [user, updateUser] = useState(null);

  useEffect(() => {
    checkUser()
    setAuthListener()
  }, [])

  async function setAuthListener() {
    Hub.listen('auth', data => {
      switch (data.payload.event) {
        case 'signIn':
          console.log('data from event: ', data.payload.data)
          updateUser(data.payload.data);
          break;
        case 'signOut':
          console.log('data from event: ', data)
          updateUser(null);
          break;
        default:
          break;
      }
    })
  }

  async function checkUser() {
    try {
      const user = await Auth.currentAuthenticatedUser()
      console.log("user : ", user);
      updateUser(user)
    } catch (err) {
      console.log("SignedIn : False")
      updateUser(null)
    }
  }

  return (
    <Router>
      <AuthProvider>
        <Nav user={user} />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/sign" component={Sign} />
          <PrivateRoute exact path="/admin" component={Admin} />
        </Switch>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
