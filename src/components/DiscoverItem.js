import React from 'react';
import {formatDate} from '../api/tmdb'

function DiscoverItem(props) {
    return (
        <div className="Card">
            <a className="Medium" href="/"><img src={props.itemData.poster_path}></img></a>
            <p>{props.itemData.vote_average}</p>
            <h3>{props.itemData.title}</h3>
            <p className="ReleaseDate">{formatDate(props.itemData.release_date, 'short')}</p>
        </div>
    )
}
export default DiscoverItem;
