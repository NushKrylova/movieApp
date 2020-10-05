import React, { useEffect, useState } from "react";
import { FAV_MOVIES } from "../constants"
import FavoriteItem from '../components/FavoriteItem'
import { getMovieDetails, parseMovie } from '../api/tmdb'

function Favorite() {
  const [results, setResults] = useState(localStorage.getItem(FAV_MOVIES).split(','))

  useEffect(() => {
    let favMovieData = results.map(id => getMovieDetails(id).then(data => parseMovie(data)));
    Promise.all(favMovieData).then(results => setResults(results))
  }, []);

  function handleUnFav(movieId) {
    let currentLocalStorage = localStorage.getItem(FAV_MOVIES)
    let newLocalStorage = currentLocalStorage.split(',').filter(el => el != movieId);
    localStorage.setItem(FAV_MOVIES, newLocalStorage);

    setResults(results.filter(el => el.id != movieId))
  }

  const faved = results.map(el => <FavoriteItem unFaved={handleUnFav} itemData={el} key={el.id} />)

  return (
    <div className="ListFav">
      {faved}
    </div>
  );
}
export default Favorite;

