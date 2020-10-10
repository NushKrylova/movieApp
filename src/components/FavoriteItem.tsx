import React from "react";
import { formatDate, Movie } from '../api/tmdb'
import { Link } from "react-router-dom";

function FavoriteItem(props: { itemData: Movie, unFaved: (movieId: number) => void }) {

    function handleClick(movieId: number) {
        props.unFaved(movieId);
    }

    return (
        <div className="BorderCard FavCard">
            <Link className="Small" to={"/" + props.itemData.id}>
                <img src={props.itemData.poster_path}></img>
            </Link>
            <div className="FavDetails">
                <div className="TopDetails">
                    <div className="Actions">
                        <p className="Votes">{props.itemData.vote_average}</p>
                    </div>
                    <div className="TextTopDetails">
                        <h3>{props.itemData.title}</h3>
                        <p className="ReleaseDate">{formatDate(props.itemData.release_date, 'long')}</p>
                    </div>
                </div>
                <p className="Overview">{props.itemData.overview}</p>
                <button className="Icon IconFav" onClick={() => handleClick(props.itemData.id)}>
                    <i className="fas fa-star"></i>
                </button>
            </div>
        </div>
    )
}
export default FavoriteItem;