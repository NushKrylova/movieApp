import React from 'react';
import { formatDate, Movie } from '../api/tmdb'
import { Link } from "react-router-dom";

type PopularItemProps = {
    movie: Movie;
};

function PopularItem(props: PopularItemProps) {
    return (
        <div className="Card BorderCard">
            <Link className="Medium" to={"/" + props.movie.id}>
                <img src={props.movie.poster_path}></img>
            </Link>
            <div className="TextCard">
                <h3>{props.movie.title}</h3>
                <p className="ReleaseDate">{formatDate(props.movie.release_date, 'short')}</p>
            </div>
        </div>
    )
}
export default PopularItem;
