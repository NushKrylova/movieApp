import React, { useEffect, useState } from "react";
import { FAV_MOVIES } from "../constants"
import FavoriteItem from '../components/FavoriteItem'
import { getMovieDetails, Movie, parseMovie } from '../api/tmdb'

function Favorite() {
  const [results, setResults] = useState<Movie[]>(getInitResults())

  function getInitResults() {
    let ids = localStorage.getItem(FAV_MOVIES).split(',');
    let res: Movie[];
    ids.forEach(el => {
      let movieDetails = {
        id: parseInt(el),
        poster_path: "",
        vote_average: 0,
        title: "",
        release_date: "",
        overview: "",
        backdrop_path: ""
      }
      res.push(movieDetails)
    })
    return res
  }
  useEffect(() => {
    let favMovieData = results.map(el => getMovieDetails(el.id).then(data => parseMovie(data)));
    Promise.all(favMovieData).then(results => setResults(results))
  }, []);

  function handleUnFav(movieId: number) {
    let currentLocalStorage = localStorage.getItem(FAV_MOVIES)?.toString() || '';
    let newLocalStorage = currentLocalStorage.split(',').filter(el => el != movieId.toString()).join(',');
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

