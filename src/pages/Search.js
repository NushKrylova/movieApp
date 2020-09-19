import React, { useEffect, useState } from "react";
import SearchResultItem from '../components/SearchResultItem'
import { searchMovies, parseTmdbResponse } from "../api/tmdb";


function Search(props) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    searchMovies(props.searchQuery).then(data => {
      console.log("ddd", data)
      let moviePreviewResults = parseTmdbResponse(data);
      setResults(moviePreviewResults);
    })

  }, [props.searchQuery]);

  const movieList = results.map(el => <SearchResultItem itemData={el} key={el.id} />)
  return (
    <div>
      {movieList}
    </div>
  )
}
export default Search;
