import React, { useEffect, useState } from "react";
import { FAV_MOVIES } from "../constants"
import FavoriteItem from '../components/FavoriteItem'
import { getMovieDetails, Movie, parseMovie } from '../api/tmdb'
import styles from './Favorite.module.css';

function Favorite() {
  const [favMovies, setFavMovies] = useState<Movie[]>([])

  useEffect(() => {
    const value = localStorage.getItem(FAV_MOVIES)?.toString() || '';
    if (value !== '') {
      let ids = value.split(',');
      const favMovieData = ids.map(id => getMovieDetails(parseInt(id)).then(data => parseMovie(data)));
      Promise.all(favMovieData).then(results => setFavMovies(results))
    }
  }, []);

  function handleUnFav(movieId: number) {
    let currentLocalStorage = localStorage.getItem(FAV_MOVIES)?.toString() || '';
    let newLocalStorage = currentLocalStorage.split(',').filter(el => el !== movieId.toString()).join(',');
    localStorage.setItem(FAV_MOVIES, newLocalStorage);

    setFavMovies(favMovies.filter(el => el.id !== movieId))
  }

  const faved = favMovies.map(el => <FavoriteItem unFaved={handleUnFav} movie={el} key={el.id} />)

  if (favMovies.length === 0) { return <p>You don't have favorites </p> }
  return (
    <div className={styles.ListFav}>
      {faved}
    </div>
  );
}
export default Favorite;

