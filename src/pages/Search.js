import React, { useEffect, useState } from "react";
import { sortTitleAZ } from '../constants'
import TopRated from '../components/TopRated'
import FiltersContainer from '../components/FiltersContainer'

function Search() {
    const [searchState, setSearchState] = useState();

    return (
        <div className="SearchContainer">
            <FiltersContainer searchClicked={setSearchState} />
            <TopRated formData={searchState}/>
        </div>
    )
}
export default Search;
