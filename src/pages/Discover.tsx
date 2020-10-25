import React, { useEffect, useState } from "react";
import FiltersContainer from '../components/FiltersContainer'
import TopRatedResultsItem from '../components/DiscoverItem';
import { getTopRated, discoverMovies, parseListOfMovies, Movie } from "../api/tmdb";
import styles from './Discover.module.css';
import Button from 'react-bootstrap/Button';

function Discover() {
    const [searchState, setSearchState] = useState<FormData>();
    const [movies, setMovies] = useState<Movie[]>([]);
    const [page, setPage] = useState(1);

    function handleClick() {
        (document.activeElement as HTMLElement).blur();
        setPage(page + 1);
    }

    let additionalQuery = "";
    useEffect(() => {
        let fetchPromise;
        if (searchState) {
            const data = splitFormData(searchState);
            const sort = data.sort;
            const genres = data.genres;
            const releaseDatesFrom = data.releaseDatesFrom;
            const releaseDatesTo = data.releaseDatesTo;
            const minUserScore = data.minUserScore;

            additionalQuery = "&vote_average.lte=" + minUserScore;
            if (sort.length > 0) {
                additionalQuery = "&sort_by=" + sort;
            }
            if (genres.length > 0) {
                additionalQuery = additionalQuery + "&with_genres=" + genres.toString();
            }
            if (releaseDatesFrom.length > 0) {
                additionalQuery = additionalQuery + "&primary_release_date.gte=" + releaseDatesFrom;
            }
            if (releaseDatesTo.length > 0) {
                additionalQuery = additionalQuery + "&primary_release_date.lte=" + releaseDatesTo;
            }
            fetchPromise = discoverMovies(additionalQuery);
        } else {
            fetchPromise = getTopRated();
        }

        fetchPromise.then(data => {
            let moviePreviewResults = parseListOfMovies(data.results);
            setMovies(moviePreviewResults);
        })
    }, [searchState]);

    useEffect(() => {
        if (page > 1) {
            discoverMovies(additionalQuery + "&page=" + page).then(data => {
                let moviePreviewResults = parseListOfMovies(data.results);
                setMovies([...movies, ...moviePreviewResults]);
            })
        }
    }, [page]);

    const topRatedResults = movies.map(el => <TopRatedResultsItem movie={el} key={el.id} />)

    return (
        <div className={styles.SearchContainer}>
            <FiltersContainer searchClicked={setSearchState} />
            <div>
                <div className={styles.Grid}>
                    {topRatedResults}
                </div>
                <div>
                    <Button name="loadMore" variant="primary" onClick={handleClick} block >Load More</Button>
                </div>
            </div>
        </div>
    )
}
export default Discover;

function splitFormData(data: FormData) {
    let result: FormFields = {
        sort: "",
        genres: [],
        releaseDatesFrom: "",
        releaseDatesTo: "",
        minUserScore: 10,
    }
    for (var key of data.keys()) {
        const value = data.get(key)?.toString() || '';
        if (key === "sort") {
            result.sort = value;
        }
        if (key.includes("genres")) {
            result.genres.push(parseInt(value, 10));
        }
        if (key === "from") {
            result.releaseDatesFrom = value;
        }
        if (key === "to") {
            result.releaseDatesTo = value;
        }
        if (key === "slider") {
            result.minUserScore = parseInt(value, 10);
        }
    }
    return result;
}

type FormFields = {
    sort: string,
    genres: number[],
    releaseDatesFrom: string,
    releaseDatesTo: string,
    minUserScore: number,
}