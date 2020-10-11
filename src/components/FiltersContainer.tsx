import React from 'react';
import Sort from './Sort';
import FilterGenres from './FilterGenres';
import FilterReleaseDates from './FilterReleaseDates';
import FilterUserScore from './FilterUserScore';
type FiltersContainerProps = {
    searchClicked: (formData: FormData) => void
}

function FiltersContainer(props: FiltersContainerProps) {
    function handleClick(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
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
