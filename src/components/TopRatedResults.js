import React from 'react';
import TopRatedResultsItem from './TopRatedResultsItem';

function TopRatedResults(props) {
    const results = props.results.map(el => <div key={el.id}><TopRatedResultsItem itemData={el} /></div>)
    return (
        <div className="Grid">
            {results}
        </div>
    )
}
export default TopRatedResults;
