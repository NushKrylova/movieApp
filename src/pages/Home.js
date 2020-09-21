import React, { useEffect, useState } from "react";
import Banner from '../components/Banner'
import DiscoverItem from '../components/DiscoverItem'
import { getPopular, parseTmdbResponse } from "../api/tmdb";

function Home() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    getPopular().then(data => {
      let results = parseTmdbResponse(data)
      setResults(results);
    })
  }, []);

  const cards = results.map(el => <div key={el.id}><DiscoverItem itemData={el} /></div>)

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
