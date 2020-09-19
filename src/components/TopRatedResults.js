import React from 'react';
import TopRatedResultsItem from './TopRatedResultsItem';

function TopRatedResults(props) {
    const results = props.results.map(el => <TopRatedResultsItem itemData={el} key={el.title}/>)
    return (
        <div className="Grid">
            {results}
        </div>
    )
}
export default TopRatedResults;
