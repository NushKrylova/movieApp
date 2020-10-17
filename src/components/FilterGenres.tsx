import React, { useEffect, useState } from "react";
import { Genre, getGenres } from "../api/tmdb";
import styles from './FilterGenres.module.css';

function FilterGenres() {
    const [genres, setGenres] = useState<Genre[]>([]);

    useEffect(() => {
        getGenres().then(data => setGenres(data.genres))
    }, []);

    const genreFields = genres.map(el =>
        <div key={el.id}>
            <input type="checkbox" value={el.id} name={"genres" + el.name} id={el.id.toString()} />
            <label htmlFor={el.id.toString()}>{el.name}</label>
        </div>
    )
    return (
        <div>
            <fieldset className={styles.Genres}>
                <legend>Genres</legend>
                {genreFields}
            </fieldset>
        </div>
    )
}
export default FilterGenres;
