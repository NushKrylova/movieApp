import React, { useEffect, useState } from "react";
import SearchResultsItem from './SearchResultsItem';
import { getNowPlaying } from "../api/tmdb";

function Banner() {
    const [results, setResults] = useState([]);

    useEffect(() => {
        getNowPlaying().then(data => {
            let results = []
            let topFive = data.results.slice(0, 1)
            topFive.map((item) => {
                let movie = {
                    backdrop_path: 'https://image.tmdb.org/t/p/w1280/' + item.backdrop_path,
                    title: item.title,
                    overview: item.overview
                };
                results.push(movie);
            })
            setResults(results);
        })
    }, []);
    const bannerItems = results.map(el =>
        <div className="Banner">
            <img src={el.backdrop_path} />
            <div className="BannerText">
                <h2>{el.title}</h2>
                <h3>{el.overview}</h3>
            </div>
        </div >
    )
    return (
        <div className="FixedContainer">
            {bannerItems}
        </div>
    )
}
export default Banner;
