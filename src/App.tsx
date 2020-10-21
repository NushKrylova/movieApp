import React, { useState } from "react";
import Header from './components/Header';
import Home from './pages/Home';
import Discover from './pages/Discover';
import Details from './pages/Details';
import Search from './pages/Search';
import Favorite from './pages/Favorite';
import styles from './App.module.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [searchState, setSearchState] = useState<string>("");

  return (
    <div className={styles.App}>
      <Router basename="/movieApp/">
        <Header searchRequested={setSearchState}></Header>
        <div className={styles.FixedContainer}>
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
            <Route path="/:id" children={<Details />}/>
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
