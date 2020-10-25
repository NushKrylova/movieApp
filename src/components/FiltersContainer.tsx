import React from 'react';
import Sort from './Sort';
import FilterGenres from './FilterGenres';
import FilterReleaseDates from './FilterReleaseDates';
import FilterUserScore from './FilterUserScore';
import styles from './FiltersContainer.module.css';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';

type FiltersContainerProps = {
    searchClicked: (formData: FormData) => void
}

function FiltersContainer(props: FiltersContainerProps) {
    function handleClick(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        props.searchClicked(formData);
        for (var key of formData.keys()) {
            console.log(">>>", key, ",", formData.get(key));
        }
    }
    return (
        <Form className={styles.FilterContainer} onSubmit={handleClick}>
            <Sort />
            <Form.Group controlId="Filters">
                <div className={styles.Border}>
                <h2>Filters</h2>
                <hr className={styles.Divider} />
                <FilterGenres />
                <hr className={styles.Divider} />
                <FilterReleaseDates />
                <hr className={styles.Divider} />
                <FilterUserScore />
                </div>
            </Form.Group>
            <div>
                <Button variant="primary" name="search" type="submit" block >Search</Button>
            </div>
        </Form>
    )
}
export default FiltersContainer;
