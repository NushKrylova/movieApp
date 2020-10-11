import React, { useEffect, useState } from "react";
import SearchItem from '../components/SearchItem'
import { searchMovies, parseListOfMovies, Movie } from "../api/tmdb";

type SearchProps = {
  searchQuery: string;
};

function Search(props: SearchProps) {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    searchMovies(props.searchQuery).then(data => {
      let moviePreviewResults = parseListOfMovies(data.results);
      setMovies(moviePreviewResults);
    })

  }, [props.searchQuery]);

  const movieList = movies.map(el => <SearchItem movie={el} key={el.id} />)
  return (
    <div>
      {movieList}
    </div>
  )
}
export default Search;
