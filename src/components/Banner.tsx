import React, { ReactElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { getNowPlaying, Movie, parseListOfMovies } from "../api/tmdb";

function Banner(): ReactElement {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getNowPlaying().then((data) => {
      const topFive = data.results.slice(0, 3);
      const results = parseListOfMovies(topFive);
      setMovies(results);
    });
  }, []);

  const bannerItems = movies.map((el) => (
    <Carousel.Item key={el.id}>
      <Link to={`/${el.id}`}>
        <img
          className="d-block w-100 rounded"
          src={el.backdrop_path}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{el.title}</h3>
          <p>{el.overview}</p>
        </Carousel.Caption>
      </Link>
    </Carousel.Item>
  ));
  return <Carousel>{bannerItems}</Carousel>;
}
export default Banner;
