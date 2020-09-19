import React, { useEffect, useState } from "react";
import Banner from '../components/Banner'
import TopRatedResults from '../components/TopRatedResults'
import { getPopular, parseTmdbResponse } from "../api/tmdb";

function Home() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    getPopular().then(data => {
      let results = parseTmdbResponse(data)
      setResults(results);
    })
  }, []);
  return (
    <div>
      <Banner />
      <TopRatedResults results={results}></TopRatedResults>
    </div>
  )
}
export default Home;
