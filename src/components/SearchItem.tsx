import React from 'react';
import { formatDate, Movie } from '../api/tmdb'
import { Link } from "react-router-dom";
import styles from './SearchItem.module.css';
import { Card, Col, Container, Row } from 'react-bootstrap';

type SearchItemProps = {
    movie: Movie;
};

function SearchItem(props: SearchItemProps) {
    return (
        <Container >
            <Card className="my-3">
                <Row style={{ height: '200px' }} noGutters>
                    <Col style={{ flex: '0 0 calc(200px / 1.5)'}} className='h-100'>
                        <Link to={"/" + props.movie.id}>
                            <Card.Img className='h-100' src={props.movie.poster_path} />
                        </Link>
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Title>{props.movie.title}</Card.Title>
                            <p className="text-muted">{formatDate(props.movie.release_date, 'long')}</p>
                            <Card.Subtitle>{props.movie.overview}</Card.Subtitle>
                        </Card.Body></Col>
                </Row>
            </Card>
        </Container>
    )
}
export default SearchItem;