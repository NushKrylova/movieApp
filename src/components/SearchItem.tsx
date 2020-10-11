import React from 'react';
import { formatDate, Movie } from '../api/tmdb'
import { Link } from "react-router-dom";

type SearchItemProps = {
    movie: Movie;
};

function SearchItem(props: SearchItemProps) {
    return (
        <div className="ListItem BorderCard">
            <Link className="Medium" to={"/" + props.movie.id}>
                <img src={props.movie.poster_path}></img>
            </Link>
            <div className="ListItemText">
                <div>
                    <h3>{props.movie.title}</h3>
                    <p className="ReleaseDate">{formatDate(props.movie.release_date, 'long')}</p>
                </div>
                <p className="Overview">{props.movie.overview}</p>
            </div>
        </div>
    )
}
export default SearchItem;