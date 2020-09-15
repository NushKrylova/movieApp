import React, { useEffect, useState } from "react";
import { getGenres } from "../api/tmdb";

function FilterGenres(props) {
    const [results, setResults] = useState([]);

    useEffect(() => {
        getGenres().then(data => {
            let results = [];
            data.genres.map(item => {
                let genres = {
                    id: item.id,
                    name: item.name
                };
                results.push(genres);
            })
            setResults(results);
        })
    }, []);



    const genres = results.map(el =>
        <div key={el.id}>
            <input type="checkbox" value={el.id} name={"genres" + el.name} id={el.id} />
            <label htmlFor={el.id}>{el.name}</label>
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
