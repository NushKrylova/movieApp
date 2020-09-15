import React from 'react';
import SearchResultsItem from './SearchResultsItem';

function SearchResults(props) {
    const results = props.results.map(el => <SearchResultsItem itemData={el} key={el.title}/>)
    return (
        <div className="Grid">
            {results}
        </div>
    )
}
export default SearchResults;
