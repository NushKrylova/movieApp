import React, { useEffect, useState } from "react";
import Banner from '../components/Banner'
import TopRatedResults from '../components/TopRatedResults'
import { getPopular } from "../api/tmdb";

function Home() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    getPopular().then(data => {
      let results = [];
      data.results.map(item => {
        let moviePreview = {
          poster_path: 'https://image.tmdb.org/t/p/w500/' + item.poster_path,
          vote_average: item.vote_average,
          title: item.title,
          release_date: item.release_date
        };
        results.push(moviePreview);
      })
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
