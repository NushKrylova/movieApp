import React, { useEffect, useState } from "react";
import { FAV_MOVIES } from "../constants"
import FavoriteItem from '../components/FavoriteItem'
import { getMovieDetails, Movie, parseMovie } from '../api/tmdb'

function Favorite() {
  const [favMovies, setFavMovies] = useState<Movie[]>([])

  useEffect(() => {
    const value = localStorage.getItem(FAV_MOVIES)?.toString() || '';
    let ids = value.split(',');
    const favMovieData = ids.map(id => getMovieDetails(parseInt(id)).then(data => parseMovie(data)));
    Promise.all(favMovieData).then(results => setFavMovies(results))
  }, []);

  function handleUnFav(movieId: number) {
    let currentLocalStorage = localStorage.getItem(FAV_MOVIES)?.toString() || '';
    let newLocalStorage = currentLocalStorage.split(',').filter(el => el !== movieId.toString()).join(',');
    localStorage.setItem(FAV_MOVIES, newLocalStorage);

    setFavMovies(favMovies.filter(el => el.id !== movieId))
  }

  const faved = favMovies.map(el => <FavoriteItem unFaved={handleUnFav} movie={el} key={el.id} />)

  return (
    <div className="ListFav">
      {faved}
    </div>
  );
}
export default Favorite;

