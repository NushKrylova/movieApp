import React, { useEffect, useState } from "react";
import FiltersContainer from '../components/FiltersContainer'
import TopRatedResultsItem from '../components/DiscoverItem';
import { getTopRated, discoverMovies, parseListOfMovies, Movie } from "../api/tmdb";
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from "react-bootstrap";

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

    const topRatedResults = movies.map(el => <Col sm={6} md={3} key={el.id} className='p-1'><TopRatedResultsItem movie={el} /></Col >)
    let title = searchState ? 'Search Results' : 'Top Rated';

    return (
        <Container>
            <h5 className='my-2'>{title}</h5>
            <Row>
                <Col sm={3} >
                    <FiltersContainer searchClicked={setSearchState} />
                </Col>
                <Col sm={9}>
                    <Row>
                        {topRatedResults}
                        <Button name="loadMore" variant="primary" onClick={handleClick} className='m-1' block >Load More</Button>
                    </Row>
                </Col>
            </Row>
        </Container>
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