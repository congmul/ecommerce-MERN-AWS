import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import Admin from './pages/Admin';
import Nav from './components/Nav';
import Sign from './pages/Sign';
import Products from './pages/Products';
import Footer from './components/Footer';

import { Auth } from 'aws-amplify'

function App() {
  return (
    <Router>
      <Nav />
      <button onClick={() => Auth.federatedSignIn({ provider: "Google"})}> Sign in with google</button>
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/sign" component={Sign} />
        <Route exact path="/admin" component={Admin} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
