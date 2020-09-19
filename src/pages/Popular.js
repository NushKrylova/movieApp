import React, { useState } from "react";
import TopRated from '../components/TopRated'
import FiltersContainer from '../components/FiltersContainer'

function Popular() {
    const [searchState, setSearchState] = useState();

    return (
        <div className="SearchContainer">
            <FiltersContainer searchClicked={setSearchState} />
            <TopRated formData={searchState}/>
        </div>
    )
}
export default Popular;
