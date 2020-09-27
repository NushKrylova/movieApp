import React, { useEffect, useState } from "react";
import { getNowPlaying, parseTmdbResponse } from "../api/tmdb";
import { Link } from "react-router-dom";

function Banner() {
    const [results, setResults] = useState([]);

    useEffect(() => {
        getNowPlaying().then(data => {
            let topFive = data.results.slice(0, 1);
            let results = parseTmdbResponse(topFive)
            setResults(results);
        })
    }, []);
    const bannerItems = results.map(el =>
        <div className="Banner" key={el.id}>
            <Link to={"/" + el.id}>
                <img src={el.backdrop_path} />
                <div className="BannerText">
                    <h2>{el.title}</h2>
                    <h3>{el.overview}</h3>
                </div>
            </Link>
        </div >
    )
    return (
        <div className="FixedContainer">
            {bannerItems}
        </div>
    )
}
export default Banner;
