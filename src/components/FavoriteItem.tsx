import React from "react";
import { formatDate, Movie } from '../api/tmdb'
import { Link } from "react-router-dom";

type FavoriteItemProps = {
    movie: Movie;
    unFaved: (movieId: number) => void;
};

function FavoriteItem(props: FavoriteItemProps) {

    function handleClick(movieId: number) {
        props.unFaved(movieId);
    }

    return (
        <div className="BorderCard FavCard">
            <Link className="Small" to={"/" + props.movie.id}>
                <img src={props.movie.poster_path}></img>
            </Link>
            <div className="FavDetails">
                <div className="TopDetails">
                    <div className="Actions">
                        <p className="Votes">{props.movie.vote_average}</p>
                    </div>
                    <div className="TextTopDetails">
                        <h3>{props.movie.title}</h3>
                        <p className="ReleaseDate">{formatDate(props.movie.release_date, 'long')}</p>
                    </div>
                </div>
                <p className="Overview">{props.movie.overview}</p>
                <button className="Icon IconFav" onClick={() => handleClick(props.movie.id)}>
                    <i className="fas fa-star"></i>
                </button>
            </div>
        </div>
    )
}
export default FavoriteItem;