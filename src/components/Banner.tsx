import React, { useEffect, useState } from "react";
import { getNowPlaying, Movie, parseListOfMovies } from "../api/tmdb";
import { Link } from "react-router-dom";
import styles from './Banner.module.css';
import Carousel from 'react-bootstrap/Carousel'

function Banner() {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        getNowPlaying().then(data => {
            let topFive = data.results.slice(0, 3);
            let results = parseListOfMovies(topFive)
            setMovies(results);
        })
    }, []);

    const bannerItems = movies.map(el =>
        <Carousel.Item key={el.id}>
            <Link to={"/" + el.id}>
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
    )
    return (
        <div className={styles.FixedContainer}>
            <Carousel>{bannerItems}</Carousel>
        </div>
    )
}
export default Banner;
