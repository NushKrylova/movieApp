import React from 'react';
import { formatDate, Movie } from '../api/tmdb'
import { Link } from "react-router-dom";
import styles from './PopularItem.module.css';
import { Card, Button } from 'react-bootstrap';

type PopularItemProps = {
    movie: Movie;
};

function PopularItem(props: PopularItemProps) {
    return (
        <Card className={styles.Card}>
            <Link to={"/" + props.movie.id}>
                <Card.Img variant="top" src={props.movie.poster_path} />
            </Link>
            <Card.Body>
                <Card.Title>{props.movie.title}</Card.Title>
                <Card.Subtitle className="text-muted">{formatDate(props.movie.release_date, 'short')}</Card.Subtitle>
            </Card.Body>
        </Card>
    )
}
export default PopularItem;
