import React from 'react';
import{formatDate} from '../api/tmdb'
function SearchItem(props) {
    return (
        <div className="ListItem">
            <a href="/"><img src={props.itemData.poster_path}></img></a>
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