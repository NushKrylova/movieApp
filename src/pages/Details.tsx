import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails, formatDate, formatTime, parseMovie, getVideo, Video, MovieDetails } from "../api/tmdb";
import { FAV_MOVIES } from "../constants"
import styles from './Details.module.css';

function Details() {
  let { id } = useParams<{ id?: string }>();
  const [movie, setMovie] = useState<MovieDetails>();
  const [fav, setFav] = useState(false);
  const [trailer, setTrailer] = useState();
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const movieId = id?.toString() || '';

    let ls = localStorage.getItem(FAV_MOVIES);
    if (ls) {
      let faved = ls.split(",").find(el => el === movieId);
      if (faved) {
        setFav(true);
      } else {
        setFav(false);
      }
    }
  }, [])

  useEffect(() => {
    const movieId = id?.toString() || '';
    const storage = new KeyListStorage(FAV_MOVIES);

    if (fav) {
      storage.add(movieId);
    } else {
      storage.remove(movieId);
    }
  }, [fav])

  useEffect(() => {
    const movieId = id?.toString() || '';

    getMovieDetails(parseInt(movieId)).then(data =>
      setMovie(parseMovie(data))
    )
  }, [id]);

  useEffect(() => {
    const movieId = id?.toString() || '';

    getVideo(parseInt(movieId)).then(data =>
      setTrailer(data.results.find((el: Video) => el.site === 'YouTube').key)
    );
  }, [id]);

  function handleClick(movieId: number) {
    setFav(!fav);
  }

  function handlePlay() {
    setPlay(!play)
  }

  let iconColor = fav ? "magenta" : "white";
  let player = play ? "Show" : "Hide";

  if (!movie) { return null }

  const divStyle = {
    backgroundImage: 'url(' + movie.backdrop_path + ')'
  };

  return (
    <div style={divStyle} className={styles.Background}>
      <div className={styles.Gradient}>
        <div className={styles.Details}>
          <div className={styles.ImageContainer}>
            <img className={styles.Image} src={movie.poster_path}></img>
          </div>
          <div className={styles.DetailsText}>
            <h3>{movie.title}</h3>
            <div className={styles.Facts}>
              <span>{formatDate(movie.release_date)}</span>
              <p className={styles.VotesText} >{movie.vote_average}</p>
              <p className={styles.Genres}>{movie.genres.map(g => g.name).join(', ')}</p>
              <p className={styles.Runtime}>{formatTime(movie.runtime)}</p>
            </div>
            <div className={styles.Facts}>
              <p className={styles.ButtonVotes}>{movie.vote_average}</p>
              <p className={styles.UserScoreText}>User Score</p>
              <button className={styles.Button} onClick={() => handleClick(movie.id)}>
                <i style={{ color: iconColor }} className="fas fa-star fa-lg"></i>
                <p className={styles.Label}>Favorite</p>
              </button>
              <button className={styles.Button} onClick={handlePlay}>
                <i className="fas fa-play fa-lg"></i>
                <p className={styles.Label}>Play Trailer</p>
              </button>
            </div>
            <div>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>

      </div>
      <div className={`${styles.Popup}  ${player}`}>
        {trailer && <div>
          <button className={styles.Close} onClick={handlePlay}><i className={`${styles.Icon} +  " fas fa-times fa-2x"`}></i></button>
          <iframe id="ytplayer" width="640" height="360"
            src={`https://www.youtube.com/embed/${trailer}?autoplay=1`}
            frameBorder="0">
          </iframe>
        </div>}
      </div>
    </div>
  );
}
export default Details;

class KeyListStorage {
  key: string;

  constructor(key: string) {
    this.key = key;
  }

  add(value: string) {
    let currentValue = localStorage.getItem(this.key);

    let lsNew;
    if (currentValue) {
      let values = currentValue.split(",");
      values.push(value);
      lsNew = values.join(",")
    } else {
      lsNew = value;
    }
    localStorage.setItem(this.key, lsNew);

  }

  remove(value: string) {
    let currentValue = localStorage.getItem(this.key) || '';
    let values = currentValue.split(",");

    let newValue = values.filter((el: string) => el !== value.toString()).join(",");
    localStorage.setItem(this.key, newValue);
  }
}