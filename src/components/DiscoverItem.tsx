import React from 'react';
import { formatDate, Movie } from '../api/tmdb'
import { Link } from 'react-router-dom';

function DiscoverItem(props: { itemData: Movie}) {
    return (
        <div className="Card BorderCard">
            <Link className="Small" to={"/" + props.itemData.id}>
                <img src={props.itemData.poster_path}></img>
            </Link>
            <div className="TextCard">
                <p>{props.itemData.vote_average}</p>
                <h3>{props.itemData.title}</h3>
                <p className="ReleaseDate">{formatDate(props.itemData.release_date, 'short')}</p>
            </div>
        </div>
    )
}
export default DiscoverItem;
