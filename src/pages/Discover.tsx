import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import FiltersContainer from "../components/FiltersContainer";
import TopRatedResultsItem from "../components/DiscoverItem";
import {
  getTopRated,
  discoverMovies,
  parseListOfMovies,
  Movie,
} from "../api/tmdb";

type FormFields = {
  sort: string;
  genres: number[];
  releaseDatesFrom: string;
  releaseDatesTo: string;
  minUserScore: number;
};

function splitFormData(data: FormData) {
  const result: FormFields = {
    sort: "",
    genres: [],
    releaseDatesFrom: "",
    releaseDatesTo: "",
    minUserScore: 10,
  };
  for (const key of data.keys()) {
    const value = data.get(key)?.toString() || "";
    if (key === "sort") {
      result.sort = value;
    }
    if (key.includes("genres")) {
      result.genres.push(parseInt(value, 10));
    }
    if (key === "from") {
      result.releaseDatesFrom = value;
    }
    if (key === "to") {
      result.releaseDatesTo = value;
    }
    if (key === "slider") {
      result.minUserScore = parseInt(value, 10);
    }
  }
  return result;
}

function Discover(): JSX.Element {
  const [searchState, setSearchState] = useState<FormData>();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);

  function handleClick() {
    (document.activeElement as HTMLElement).blur();
    setPage(page + 1);
  }

  let additionalQuery = "";
  useEffect(() => {
    let fetchPromise;
    if (searchState) {
      const data = splitFormData(searchState);
      const { sort } = data;
      const { genres } = data;
      const { releaseDatesFrom } = data;
      const { releaseDatesTo } = data;
      const { minUserScore } = data;

      additionalQuery = `&vote_average.lte=${minUserScore}`;
      if (sort.length > 0) {
        additionalQuery = `&sort_by=${sort}`;
      }
      if (genres.length > 0) {
        additionalQuery = `${additionalQuery}&with_genres=${genres.toString()}`;
      }
      if (releaseDatesFrom.length > 0) {
        additionalQuery = `${additionalQuery}&primary_release_date.gte=${releaseDatesFrom}`;
      }
      if (releaseDatesTo.length > 0) {
        additionalQuery = `${additionalQuery}&primary_release_date.lte=${releaseDatesTo}`;
      }
      fetchPromise = discoverMovies(additionalQuery);
    } else {
      fetchPromise = getTopRated();
    }

    fetchPromise.then((data) => {
      const moviePreviewResults = parseListOfMovies(data.results);
      setMovies(moviePreviewResults);
    });
  }, [searchState]);

  useEffect(() => {
    if (page > 1) {
      discoverMovies(`${additionalQuery}&page=${page}`).then((data) => {
        const moviePreviewResults = parseListOfMovies(data.results);
        setMovies([...movies, ...moviePreviewResults]);
      });
    }
  }, [page]);

  const topRatedResults = movies.map((el) => (
    <Col sm={6} md={4} lg={3} key={el.id} className="p-1">
      <TopRatedResultsItem movie={el} />
    </Col>
  ));
  const title = searchState ? "Search Results" : "Top Rated";

  return (
    <Container>
      <h5 className="my-2">{title}</h5>
      <Row>
        <Col sm={5} md={4} lg={3}>
          <FiltersContainer searchClicked={setSearchState} />
        </Col>
        <Col sm={7} md={8} lg={9}>
          <Row>
            {topRatedResults}
            <Button
              name="loadMore"
              variant="primary"
              onClick={handleClick}
              className="m-1"
              block
            >
              Load More
            </Button>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default Discover;
