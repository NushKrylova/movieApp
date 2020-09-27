import React, { useEffect, useState } from "react";
import Banner from '../components/Banner'
import PopularItem from '../components/PopularItem'
import { getPopular, parseTmdbResponse } from "../api/tmdb";

function Home() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    getPopular().then(data => {
      let results = parseTmdbResponse(data.results)
      setResults(results);
    })
  }, []);

  const cards = results.map(el => <div key={el.id}><PopularItem itemData={el} /></div>)

  return (
    <div>
      <Banner />
      <div className="Grid">
            {cards}
        </div>

    </div>
  )
}
export default Home;
