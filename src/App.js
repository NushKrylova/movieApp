import React, { useEffect, useState } from "react";
import Header from './components/Header';
import Home from './pages/Home';
import Discover from './pages/Discover';
import Details from './pages/Details';
import Search from './pages/Search';
import Favorite from './pages/Favorite';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [searchState, setSearchState] = useState();

  return (
    <div className="App">
      <Router>
        <Header searchRequested={setSearchState}></Header>
        <div className="FixedContainer">
          <Switch>
            <Route path="/favorite">
              <Favorite/>
            </Route>
            <Route path="/search">
              <Search searchQuery={searchState} />
            </Route>
            <Route path="/movies">
              <Discover />
            </Route>
            <Route path="/:id" children={<Details />}>
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
