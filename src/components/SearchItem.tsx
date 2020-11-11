import React from 'react';
import { formatDate, Movie } from '../api/tmdb'
import { Link } from "react-router-dom";
import { Card, Col, Row } from 'react-bootstrap';
import styles from './SearchItem.module.scss';

type SearchItemProps = {
    movie: Movie;
};

function SearchItem(props: SearchItemProps) {
    return (
        <Card className="mb-3">
            <Row noGutters>
                <Col style={{ flex: '0 0 calc(200px / 1.5)', height: '200px'}}>
                    <Link to={"/" + props.movie.id} className='d-flex h-100 border-right'>
                        <Card.Img className={`img-fluid ${styles.NoRadius}`} style={{ objectFit: 'cover'}} src={props.movie.poster_path} />
                    </Link>
                </Col>
                <Col>
                    <Card.Body className="p-3">
                        <Card.Title className='m-0'>{props.movie.title}</Card.Title>
                        <p className="text-muted">{formatDate(props.movie.release_date, 'long')}</p>
                        <p className={`m-0 ${styles.Truncate}`}>{props.movie.overview}</p>
                    </Card.Body></Col>
            </Row>
        </Card>
    )
}
export default SearchItem;