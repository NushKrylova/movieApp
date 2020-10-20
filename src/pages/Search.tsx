import React, { useEffect, useState } from "react";
import SearchItem from '../components/SearchItem'
import { searchMovies, parseListOfMovies, Movie } from "../api/tmdb";

type SearchProps = {
  searchQuery: string;
};

function Search(props: SearchProps) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
     const queryParamValue = new URLSearchParams(window.location.search).get('q') || '';

    const searchQuery = props.searchQuery || decodeURIComponent(queryParamValue);
    searchMovies(searchQuery).then(data => {
      let moviePreviewResults = parseListOfMovies(data.results);
      setMovies(moviePreviewResults);
      setLoader(false);
    })

  }, [props.searchQuery]);

  const movieList = movies.map(el => <SearchItem movie={el} key={el.id} />)

if (movies.length === 0 && loader) { return <p>{`There are no movies that matched your query: ${new URLSearchParams(window.location.search).get('q')}`}</p> }

  return (
    <div>
      {movieList}
    </div>
  )
}
export default Search;
