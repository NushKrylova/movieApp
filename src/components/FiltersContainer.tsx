import React from 'react';
import Sort from './Sort';
import FilterGenres from './FilterGenres';
import FilterReleaseDates from './FilterReleaseDates';
import FilterUserScore from './FilterUserScore';
import styles from './FiltersContainer.module.css';

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
        <form className={styles.FilterContainer} onSubmit={handleClick}>
            <Sort />
            <div className={styles.Border}>
                <h3 className={styles.Title}>Filters</h3>
                <hr className={styles.Divider}/>
                <FilterGenres />
                <hr className={styles.Divider}/>
                <FilterReleaseDates />
                <hr className={styles.Divider}/>
                <FilterUserScore />
            </div>
            <div>
                <button name="search" type="submit" className={styles.Button}>Search</button>
            </div>
        </form>
    )
}
export default FiltersContainer;
