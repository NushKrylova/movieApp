import React, { useEffect, useState } from "react";
import SearchResultsItem from './SearchResultsItem';
import { getTopRated, discoverMovies } from "../api/tmdb";

function TopRated(props) {
  const [results, setResults] = useState([]);

  function splitFormData(data) {
    let result = {
      sort: "",
      genres: [],
      releaseDatesFrom: "",
      releaseDatesTo: "",
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
    }
    console.log(result);
    return result;
  }

  useEffect(() => {
    let fetchPromise;

    if (props.formData) {
      const data = splitFormData(props.formData);
      const sort = data.sort;
      const genres = data.genres;
      const releaseDatesFrom = data.releaseDatesFrom;
      const releaseDatesTo = data.releaseDatesTo;

      let additionalQuery = "";
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
      let results = [];
      data.results.map(item => {
        let moviePreview = {
          poster_path: 'https://image.tmdb.org/t/p/w500/' + item.poster_path,
          vote_average: item.vote_average,
          title: item.title,
          release_date: item.release_date
        };
        results.push(moviePreview);
      })
      setResults(results);
    })
  }, [props.formData]);
  const topRatedResults = results.map(el => <SearchResultsItem itemData={el} key={el.title} />)
  return (
    <div className="Grid TopRatedGrid">
      {topRatedResults}
    </div>
  )
}
export default TopRated;
