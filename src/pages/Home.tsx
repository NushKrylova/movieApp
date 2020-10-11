import React, { useEffect, useState } from "react";
import Banner from '../components/Banner'
import PopularItem from '../components/PopularItem'
import { getPopular, Movie, parseListOfMovies } from "../api/tmdb";

function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getPopular().then(data => {
      let results = parseListOfMovies(data.results)
      setMovies(results);
    })
  }, []);

  const cards = movies.map(el => <div key={el.id}><PopularItem movie={el} /></div>)

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
