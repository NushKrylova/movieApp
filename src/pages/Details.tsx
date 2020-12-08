import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {
  getMovieDetails,
  formatDate,
  formatTime,
  parseMovie,
  getVideo,
  Video,
  MovieDetails,
} from "../api/tmdb";
import UserScore from "../components/UserScore";
import { FAV_MOVIES } from "../constants";
import styles from "./Details.module.scss";

function Details() {
  const { id } = useParams<{ id?: string }>();
  const [movie, setMovie] = useState<MovieDetails>();
  const [fav, setFav] = useState(false);
  const [trailer, setTrailer] = useState();
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const movieId = id?.toString() || "";

    const ls = localStorage.getItem(FAV_MOVIES);
    if (ls) {
      const faved = ls.split(",").find((el) => el === movieId);
      if (faved) {
        setFav(true);
      } else {
        setFav(false);
      }
    }
  }, []);

  useEffect(() => {
    const movieId = id?.toString() || "";
    const storage = new KeyListStorage(FAV_MOVIES);

    if (fav) {
      storage.add(movieId);
    } else {
      storage.remove(movieId);
    }
  }, [fav]);

  useEffect(() => {
    const movieId = id?.toString() || "";

    getMovieDetails(parseInt(movieId)).then((data) =>
      setMovie(parseMovie(data))
    );
  }, [id]);

  useEffect(() => {
    const movieId = id?.toString() || "";

    getVideo(parseInt(movieId)).then((data) =>
      setTrailer(data.results.find((el: Video) => el.site === "YouTube").key)
    );
  }, [id]);

  function handleClick(movieId: number) {
    setFav(!fav);
  }

  function handlePlay() {
    setPlay(!play);
  }

  const iconColor = fav ? styles.Selected : styles.IconButton;

  if (!movie) {
    return null;
  }

  const divStyle = {
    backgroundImage: `url(${movie.backdrop_path})`,
  };

  return (
    <Container fluid className="p-0">
      <Container>
        <h5 className="my-2">Movie Details</h5>
      </Container>
      <div style={divStyle}>
        <div className={styles.Gradient}>
          <Container>
            <Row>
              <Col sm={3} className="m-auto">
                <img
                  alt="poster"
                  className="w-100 rounded my-4"
                  src={movie.poster_path}
                />
              </Col>
              <Col className="m-auto">
                <h3 className="mt-3">{movie.title}</h3>
                <div className={`d-inline-flex ${styles.Dot}`}>
                  <span>{formatDate(movie.release_date)}</span>
                  <p className={`ml-3 ${styles.Dot}`}>{movie.vote_average}</p>
                  <p
                    className={`ml-3 ${styles.Dot} ${styles.Truncate1}`}
                    title={movie.genres.map((g) => g.name).join(", ")}
                  >
                    {movie.genres.map((g) => g.name).join(", ")}
                  </p>
                  <p
                    className={`ml-3 ${styles.Dot} ${styles.Truncate1}`}
                    title={formatTime(movie.runtime)}
                  >
                    {formatTime(movie.runtime)}
                  </p>
                </div>
                <div>
                  <div className="d-inline-flex my-1">
                    <label className="d-inline-block m-auto">
                      <UserScore
                        vote={movie.vote_average}
                        size="md"
                        className="mr-2"
                      />
                      User Score
                    </label>
                    <Button
                      variant="primary"
                      onClick={() => handleClick(movie.id)}
                      className={`ml-4 ${styles.IconButton}`}
                    >
                      <i className={`fas fa-star fa-lg mr-2 ${iconColor}`} />
                      Favorites
                    </Button>
                  </div>
                </div>
                <h2 className="my-3">Overview</h2>
                <p>{movie.overview}</p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Container>
        <h5 className="my-2">Trailer</h5>
      </Container>
      <Container>
        <div className={styles.VideoContainer}>
          <iframe
            id="ytplayer"
            className="rounded"
            src={`https://www.youtube.com/embed/${trailer}?autoplay=1`}
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </Container>
    </Container>
  );
}
export default Details;

class KeyListStorage {
  key: string;

  constructor(key: string) {
    this.key = key;
  }

  add(value: string) {
    const currentValue = localStorage.getItem(this.key);

    let lsNew;
    if (currentValue) {
      const values = currentValue.split(",");
      values.push(value);
      lsNew = values.join(",");
    } else {
      lsNew = value;
    }
    localStorage.setItem(this.key, lsNew);
  }

  remove(value: string) {
    const currentValue = localStorage.getItem(this.key) || "";
    const values = currentValue.split(",");

    const newValue = values
      .filter((el: string) => el !== value.toString())
      .join(",");
    localStorage.setItem(this.key, newValue);
  }
}
