import React from "react";
import { formatDate } from '../api/tmdb'
import { Link } from "react-router-dom";

function FavoriteItem(props) {

    function handleClick(movieId) {
        props.unFaved(movieId);
    }

    return (
        <div className="BorderCard FavCard">
            <Link className="Small" to={"/" + props.itemData.id}>
                <img src={props.itemData.poster}></img>
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