import React, { useEffect, useState } from "react";
import { Genre, getGenres } from "../api/tmdb";

function FilterGenres() {
    const [results, setResults] = useState<Genre[]>([]);

    useEffect(() => {
        getGenres().then(data => setResults(data.genres))
    }, []);

    const genres = results.map(el =>
        <div key={el.id}>
            <input type="checkbox" value={el.id} name={"genres" + el.name} id={el.id.toString()} />
            <label htmlFor={el.id.toString()}>{el.name}</label>
        </div>
    )
    return (
        <div>
            <fieldset className="Genres">
                <legend>Genres</legend>
                {genres}
            </fieldset>
        </div>
    )
}
export default FilterGenres;
