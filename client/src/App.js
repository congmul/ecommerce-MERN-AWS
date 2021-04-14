import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import Admin from './pages/Admin';
import Nav from './components/Nav';
import Sign from './pages/Sign';
import Products from './pages/Products';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Nav />
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
