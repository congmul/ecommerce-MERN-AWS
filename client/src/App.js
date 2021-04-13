import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import Nav from './components/Nav';
import Products from './pages/Products';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Products} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
