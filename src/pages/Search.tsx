import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SearchItem from "../components/SearchItem";
import { searchMovies, parseListOfMovies, Movie } from "../api/tmdb";

type SearchProps = {
  searchQuery: string;
};

function Search(props: SearchProps): JSX.Element {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loader, setLoader] = useState<boolean>(false);
  const [query, setSearchQuery] = useState<string>("");
  const { searchQuery } = props;

  useEffect(() => {
    const queryParamValue =
      new URLSearchParams(window.location.hash.split("?")[1]).get("q") || "";

    const result = searchQuery || decodeURIComponent(queryParamValue);
    searchMovies(result).then((data) => {
      const moviePreviewResults = parseListOfMovies(data.results);
      setMovies(moviePreviewResults);
      setLoader(true);
    });
    setSearchQuery(result);
  }, [searchQuery]);

  const movieList = movies.map((el) => <SearchItem movie={el} key={el.id} />);

  if (movies.length === 0 && loader) {
    return (
      <Container>
        <p className="my-2">{`There are no movies that matched your query: '${query}'`}</p>
      </Container>
    );
  }

  return (
    <Container>
      <h5 className="my-2">Search results for: &quot;{query}&quot;</h5>
      {movieList}
    </Container>
  );
}
export default Search;
