import React from 'react';
import { formatDate, Movie } from '../api/tmdb'
import { Link } from 'react-router-dom';

type DiscoverItemProps = {
    movie: Movie;
};

function DiscoverItem(props: DiscoverItemProps) {
    return (
        <div className="Card BorderCard">
            <Link className="Small" to={"/" + props.movie.id}>
                <img src={props.movie.poster_path}></img>
            </Link>
            <div className="TextCard">
                <p>{props.movie.vote_average}</p>
                <h3>{props.movie.title}</h3>
                <p className="ReleaseDate">{formatDate(props.movie.release_date, 'short')}</p>
            </div>
        </div>
    )
}
export default DiscoverItem;
