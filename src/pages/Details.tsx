import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails, formatDate, formatTime, parseMovie, getVideo } from "../api/tmdb";
import { FAV_MOVIES } from "../constants"

function Details() {
  let { id } = useParams<{ id?: string }>();
  const [results, setResults] = useState(null);
  const [fav, setFav] = useState(() => getInitialValue(id));
  const [trailer, setTrailer] = useState();
  const [play, setPlay] = useState(false);

  function getInitialValue(movieId: string) {
    let ls = localStorage.getItem(FAV_MOVIES);
    if (ls) {
      let faved = ls.split(",").find(el => el === movieId);
      if (faved) {
        return true
      }
    }
  }

  useEffect(() => {
    getMovieDetails(parseInt(id)).then(data =>
      setResults(parseMovie(data))
    );

    getVideo(parseInt(id)).then(data =>
      setTrailer(data.results.find(el => el.site === 'YouTube').key)
    );
  }, []);

  function handleClick(movieId) {
    let lsCurrent = localStorage.getItem(FAV_MOVIES);
    let lsNew;
    if (lsCurrent) {
      if (fav) {
        lsNew = lsCurrent.split(",").filter(el => el != movieId).join(",");
        console.log("lsNew", lsCurrent)
        localStorage.setItem(FAV_MOVIES, lsNew)
      } else {
        lsNew = lsCurrent + "," + movieId;
      }
    } else {
      lsNew = movieId;
    }
    localStorage.setItem(FAV_MOVIES, lsNew)
    setFav(!fav);
  }

  function handlePlay() {
    setPlay(!play)
  }

  let iconColor = fav ? "magenta" : "white";
  let player = play ? "Show" : "Hide";

  if (!results) { return null }

  const divStyle = {
    backgroundImage: 'url(' + results.backdrop_path + ')'
  };

  return (
    <div style={divStyle} className="Background">
      <div className="Gradient">
        <div className="Details FixedContainer" >
          <div className="Big">
            <img src={results.poster_path}></img>
            <div className="DetailsText">
              <h3>{results.title}</h3>
              <div className="Facts">
                <span>{formatDate(results.release_date)}</span>
                <p>{results.vote_average}</p>
                <p>{results.genres}</p>
                <p>{formatTime(results.runtime)}</p>
              </div>
              <div className="Actions">
                <p className="Votes">{results.vote_average}</p>
                <p className="VotesText">User Score</p>
                <button className="Icon IconFav" onClick={() => handleClick(results.id)}>
                  <i style={{ color: iconColor }} className="fas fa-star"></i>
                </button>
                <button className="Icon IconPlay" onClick={handlePlay}>
                  <i className="fas fa-play fa-lg"></i>
                  <p id="PlayText">Play Trailer</p>
                </button>
              </div>
              <div className="Info">
                <h2>Overview</h2>
                <p>{results.overview}</p>
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