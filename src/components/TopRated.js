import React, { useEffect, useState } from "react";
import TopPopularItem from './TopPopularItem';
import { getTopRated, discoverMovies, parseTmdbResponse } from "../api/tmdb";

function TopRated(props) {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);

  function handleClick() {
    document.activeElement.blur();
    setPage(page + 1);
  }

  let additionalQuery = "";
  useEffect(() => {
    let fetchPromise;
    if (props.formData) {
      const data = splitFormData(props.formData);
      const sort = data.sort;
      const genres = data.genres;
      const releaseDatesFrom = data.releaseDatesFrom;
      const releaseDatesTo = data.releaseDatesTo;
      const minUserScore = data.minUserScore;

      additionalQuery = "&vote_average.lte=" + minUserScore;
      if (sort.length > 0) {
        additionalQuery = "&sort_by=" + sort;
      }
      if (genres.length > 0) {
        additionalQuery = additionalQuery + "&with_genres=" + genres.toString();
      }
      if (releaseDatesFrom.length > 0) {
        additionalQuery = additionalQuery + "&primary_release_date.gte=" + releaseDatesFrom;
      }
      if (releaseDatesTo.length > 0) {
        additionalQuery = additionalQuery + "&primary_release_date.lte=" + releaseDatesTo;
      }
      fetchPromise = discoverMovies(additionalQuery);
    } else {
      fetchPromise = getTopRated();
    }

    fetchPromise.then(data => {
      let moviePreviewResults = parseTmdbResponse(data);
      setResults(moviePreviewResults);
    })
  }, [props.formData]);

  useEffect(() => {
    if (page > 1) {
      discoverMovies(additionalQuery + "&page=" + page).then(data => {
        let moviePreviewResults = parseTmdbResponse(data);
        console.log(">>>", results, moviePreviewResults, page);
        setResults([...results, ...moviePreviewResults]);
      })
    }
  }, [page]);

  const topRatedResults = results.map(el => <TopPopularItem itemData={el} key={el.id} />)

  return (
    <div>
      <div className="Grid TopRatedGrid">
        {topRatedResults}
      </div>
      <div>
        <button name="loadMore" className="Button" onClick={handleClick}>Load More</button>
      </div>
    </div>
  )
}
export default TopRated;


function splitFormData(data) {
  let result = {
    sort: "",
    genres: [],
    releaseDatesFrom: "",
    releaseDatesTo: "",
    minUserScore: 10,
  }
  for (var key of data.keys()) {
    if (key === "sort") {
      result.sort = data.get(key);
    }
    if (key.includes("genres")) {
      result.genres.push(data.get(key));
    }
    if (key === "from") {
      result.releaseDatesFrom = data.get(key);
    }
    if (key === "to") {
      result.releaseDatesTo = data.get(key);
    }
    if (key === "slider") {
      result.minUserScore = data.get(key);
    }
  }
  return result;
}

