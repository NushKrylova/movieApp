import React, { useEffect, useState } from "react";
import SearchItem from '../components/SearchItem'
import { searchMovies, parseListOfMovies } from "../api/tmdb";

function Search(props: { searchQuery: string; }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    searchMovies(props.searchQuery).then(data => {
      let moviePreviewResults = parseListOfMovies(data.results);
      setResults(moviePreviewResults);
    })

  }, [props.searchQuery]);

  const movieList = results.map(el => <SearchItem itemData={el} key={el.id} />)
  return (
    <div>
      {movieList}
    </div>
  )
}
export default Search;
