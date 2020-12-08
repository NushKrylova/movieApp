import React, { useState } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Details from "./pages/Details";
import Search from "./pages/Search";
import Favorite from "./pages/Favorite";

function App() {
  const [searchState, setSearchState] = useState<string>("");

  return (
    <HashRouter>
      <Header searchRequested={setSearchState} />
      <Switch>
        <Route path="/favorite">
          <Favorite />
        </Route>
        <Route path="/search">
          <Search searchQuery={searchState} />
        </Route>
        <Route path="/movies">
          <Discover />
        </Route>
        <Route path="/:id" children={<Details />} />
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
