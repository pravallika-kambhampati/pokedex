import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import NavBar from './components/layout/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/layout/Dashboard';
import backgroundImage from './pattern.png';
import Pokemon from './components/Pokemon/Pokemon';

function App() {
  return (
    <Router>
      <div className="App" style={{background: `url(${backgroundImage})`}}>
       <NavBar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
          
        </Switch>
     </div>
    </div>
    </Router>
    
  );
}

export default App;
