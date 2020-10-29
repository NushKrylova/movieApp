import React from 'react';
import { formatDate, Movie } from '../api/tmdb'
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

type DiscoverItemProps = {
    movie: Movie;
};

function DiscoverItem(props: DiscoverItemProps) {
    return (
        <Card className="h-100">
            <Link to={"/" + props.movie.id}>
                <Card.Img variant="top" src={props.movie.poster_path} />
            </Link>
            <Card.Body>
                <Card.Title>{props.movie.vote_average}</Card.Title>
                <Card.Title className='h3'>{props.movie.title}</Card.Title>
                <Card.Text>{formatDate(props.movie.release_date, 'short')}</Card.Text>
            </Card.Body>
        </Card>
    )
}
export default DiscoverItem;
