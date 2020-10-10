import React from 'react';
import { formatDate } from '../api/tmdb'
import { Link } from "react-router-dom";

function SearchItem(props) {
    return (
        <div className="ListItem BorderCard">
            <Link className="Medium" to={"/" + props.itemData.id}>
                <img src={props.itemData.poster_path}></img>
            </Link>
            <div className="ListItemText">
                <div>
                    <h3>{props.itemData.title}</h3>
                    <p className="ReleaseDate">{formatDate(props.itemData.release_date, 'long')}</p>
                </div>
                <p className="Overview">{props.itemData.overview}</p>
            </div>
        </div>
    )
}
export default SearchItem;