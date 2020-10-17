import React, { useEffect, useState } from "react";
import { getNowPlaying, Movie, parseListOfMovies } from "../api/tmdb";
import { Link } from "react-router-dom";
import styles from './Banner.module.css';

function Banner() {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        getNowPlaying().then(data => {
            let topFive = data.results.slice(0, 1);
            let results = parseListOfMovies(topFive)
            setMovies(results);
        })
    }, []);
    
    const bannerItems = movies.map(el =>
        <div className={styles.Banner} key={el.id}>
            <Link to={"/" + el.id}>
                <img src={el.backdrop_path} />
                <div className={styles.BannerText}>
                    <h2>{el.title}</h2>
                    <h3>{el.overview}</h3>
                </div>
            </Link>
        </div >
    )
    return (
        <div className={styles.FixedContainer}>
            {bannerItems}
        </div>
    )
}
export default Banner;
