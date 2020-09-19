import React, { useEffect, useState } from "react";
import Banner from '../components/Banner'
import TopRatedResults from '../components/TopRatedResults'
import { getPopular } from "../api/tmdb";

function Search() {
  
  return (
    <div>
      <TopRatedResults results={results}></TopRatedResults>
    </div>
  )
}
export default Search;
