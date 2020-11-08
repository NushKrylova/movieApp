import React from "react";
import { formatDate, Movie } from '../api/tmdb'
import { Link } from "react-router-dom";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import styles from './FavoriteItem.module.scss';
import UserScore from "./UserScore";

type FavoriteItemProps = {
    movie: Movie;
    unFaved: (movieId: number) => void;
};

function FavoriteItem(props: FavoriteItemProps) {

    function handleClick(movieId: number) {
        props.unFaved(movieId);
    }

    return (
        <Card className="mb-3">
            <Row style={{ height: '210px' }} noGutters>
                <Col style={{ flex: '0 0 calc(210px / 1.5)' }} className='h-100'>
                    <Link to={"/" + props.movie.id}>
                        <Card.Img className={`h-100 border-right ${styles.NoRadius}`} src={props.movie.poster_path} />
                    </Link>
                </Col>
                <Col>
                    <Card.Body className='p-3'>
                        <div className='d-flex'>
                            <UserScore vote={props.movie.vote_average} size="md" />
                            <div className='mx-2 my-auto'>
                                <Card.Title className='mb-0'>{props.movie.title}</Card.Title>
                                <p className='text-muted'>{formatDate(props.movie.release_date, 'short')}</p>
                            </div>
                        </div>
                        <p className={`m-0 mb-2 ${styles.Trancate}`}>{props.movie.overview}</p>
                        <Button variant="primary" onClick={() => handleClick(props.movie.id)} className={`pl-0 ${styles.IconButton}`}>
                            <i className={`fas fa-star fa-lg mr-2 ${styles.Selected}`}></i>Favorite
                      </Button>
                    </Card.Body>
                </Col>
            </Row>
        </Card>

    )
}
export default FavoriteItem;