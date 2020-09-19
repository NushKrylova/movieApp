import React from 'react';

function TopRatedResultsItem(props) {
    return (
        <div className="Card">
            <a href="/"><img src={props.itemData.poster_path}></img></a>
            <p id="raiting">{props.itemData.vote_average}</p>
            <p id="title">{props.itemData.title}</p>
            <p id="released">{props.itemData.release_date}</p>
        </div>
    )
}
export default TopRatedResultsItem;
