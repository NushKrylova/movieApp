import React from 'react';
import Sort from './Sort';
import FilterGenres from './FilterGenres';
import FilterReleaseDates from './FilterReleaseDates';
import FilterUserScore from './FilterUserScore';

function FiltersContainer(props: { searchClicked: (formData: FormData) => void }) {
    function handleClick(e: { preventDefault: () => void; target: HTMLFormElement; }) {
        e.preventDefault();
        let formData = new FormData(e.target);
        props.searchClicked(formData);
        // for (var key of formData.keys()) {
        //     console.log(">>>", key, ",", formData.get(key));
        // }
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
                <hr />
                <FilterUserScore />
            </div>
            <div>
                <button name="search" type="submit" className="Button">Search</button>
            </div>
        </form>
    )
}
export default FiltersContainer;
