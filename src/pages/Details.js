import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails, formatDate, formatTime } from "../api/tmdb";


function Details() {
  let { id } = useParams();
  const [results, setResults] = useState([]);
  const [fav, setFav] = useState(() => getInitialValue(id));

  function getInitialValue(movieId) {
    let value = localStorage.getItem(movieId);
    if (value) {
      return value === "true"
    } else {
      return false
    }
  }

  useEffect(() => {
    getMovieDetails(id).then(data => {
      setResults({
        id: data.id,
        title: data.title,
        poster: 'https://image.tmdb.org/t/p/w500/' + data.poster_path,
        vote_average: data.vote_average,
        title: data.title,
        release_date: data.release_date,
        overview: data.overview,
        backdrop_path: 'https://image.tmdb.org/t/p/original/' + data.backdrop_path,
        genres: data.genres.map(g => g.name).join(', '),
        runtime: data.runtime
      });
    });
  }, []);

  function handleClick(movieId) {
    let newValue = true;
    let currentValue = localStorage.getItem(movieId);
    if (currentValue) {
      let boolCurrentValue = currentValue === "true";
      newValue = !boolCurrentValue;
    }
    localStorage.setItem(movieId, newValue)
    setFav(newValue);
  }

  const divStyle = {
    backgroundImage: 'url(' + results.backdrop_path + ')'
  };

  let iconColor = fav ? "magenta" : "white";
  
  return (
    <div style={divStyle} className="Background">
      <div className="Gradient">
        <div className="Details FixedContainer" >
          <div className="Big">
            <img src={results.poster}></img>
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
                <button className="Icon" onClick={() => handleClick(results.id)}>
                  <i style={{ color: iconColor }} className="fas fa-star"></i>
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
    </div>
  );
}
export default Details;

