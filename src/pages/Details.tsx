import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails, formatDate, formatTime, parseMovie, getVideo, Video, MovieDetails } from "../api/tmdb";
import { FAV_MOVIES } from "../constants"

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

  //TODO: move localstorage to
  function handleClick(movieId: number) {
    let lsCurrent = localStorage.getItem(FAV_MOVIES);
    let lsNew: string;
    if (lsCurrent) {
      if (fav) {
        lsNew = lsCurrent.split(",").filter(el => el !== movieId.toString()).join(",");
        console.log("lsNew", lsCurrent)
        localStorage.setItem(FAV_MOVIES, lsNew)
      } else {
        lsNew = lsCurrent + "," + movieId;
      }
    } else {
      lsNew = movieId.toString();
    }
    localStorage.setItem(FAV_MOVIES, lsNew)
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
    <div style={divStyle} className="Background">
      <div className="Gradient">
        <div className="Details FixedContainer" >
          <div className="Big">
            <img src={movie.poster_path}></img>
            <div className="DetailsText">
              <h3>{movie.title}</h3>
              <div className="Facts">
                <span>{formatDate(movie.release_date)}</span>
                <p>{movie.vote_average}</p>
                <p>{movie.genres.map(g => g.name).join(', ')}</p>
                <p>{formatTime(movie.runtime)}</p>
              </div>
              <div className="Actions">
                <p className="Votes">{movie.vote_average}</p>
                <p className="VotesText">User Score</p>
                <button className="Icon IconFav" onClick={() => handleClick(movie.id)}>
                  <i style={{ color: iconColor }} className="fas fa-star"></i>
                </button>
                <button className="Icon IconPlay" onClick={handlePlay}>
                  <i className="fas fa-play fa-lg"></i>
                  <p id="PlayText">Play Trailer</p>
                </button>
              </div>
              <div className="Info">
                <h2>Overview</h2>
                <p>{movie.overview}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"Popup " + player}>
        {trailer && <div>
          <button className="Close" onClick={handlePlay}><i className="fas fa-times fa-2x "></i></button>
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