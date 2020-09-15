import React from 'react';
import Sort from './Sort';
import FilterGenres from './FilterGenres';
import FilterReleaseDates from './FilterReleaseDates';

function FiltersContainer(props) {
    function handleClick(e) {
        e.preventDefault();
        let formData = new FormData(e.target);
        props.searchClicked(formData);
    }
    return (
        <form className="FilterContainer" onSubmit={handleClick}>
            <Sort />
            <div className="Border">
                <h3>Filters</h3>
                <hr />
                <FilterGenres />
                <hr />
                <FilterReleaseDates />
            </div>
            <div className="ButtonContainer">
                <button name="search" type="submit">Search</button>
            </div>
        </form>
    )
}
export default FiltersContainer;
