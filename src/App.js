import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Movies from './pages/Movies';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <div className="FixedContainer">
          <Switch>
            <Route path="/movies">
              <Movies />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
