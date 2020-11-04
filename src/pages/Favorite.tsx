import React, { useEffect, useState } from "react";
import { FAV_MOVIES } from "../constants"
import FavoriteItem from '../components/FavoriteItem'
import { getMovieDetails, Movie, parseMovie } from '../api/tmdb'
import { Container } from "react-bootstrap";

function Favorite() {
  const [favMovies, setFavMovies] = useState<Movie[]>([])
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    const value = localStorage.getItem(FAV_MOVIES)?.toString() || '';
    if (value !== '') {
      let ids = value.split(',');
      const favMovieData = ids.map(id => getMovieDetails(parseInt(id)).then(data => parseMovie(data)));
      Promise.all(favMovieData).then(results => {
        setFavMovies(results);
        setLoader(true);
      })
    } else {
      setLoader(true);
    }
  }, []);

  function handleUnFav(movieId: number) {
    let currentLocalStorage = localStorage.getItem(FAV_MOVIES)?.toString() || '';
    let newLocalStorage = currentLocalStorage.split(',').filter(el => el !== movieId.toString()).join(',');
    localStorage.setItem(FAV_MOVIES, newLocalStorage);

    setFavMovies(favMovies.filter(el => el.id !== movieId))
  }

  const faved = favMovies.map(el => <FavoriteItem unFaved={handleUnFav} movie={el} key={el.id} />)

  if (favMovies.length === 0 && loader) { return <p>You don't have favorites</p> }
  return (
    <Container >
      <h5 className='my-2'> My Favorites</h5>
      {faved}
    </Container>
  );
}
export default Favorite;

