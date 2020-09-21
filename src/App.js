import React, { useEffect, useState } from "react";
import Header from './components/Header';
import Home from './pages/Home';
import TopRated2 from './pages/TopRated2';
import Search from './pages/Search';
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
            <Route path="/search">
              <Search searchQuery={searchState}/>
            </Route>
            <Route path="/movies">
              <TopRated2 />
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
