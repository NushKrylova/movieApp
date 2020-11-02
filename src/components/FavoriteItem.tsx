import React from "react";
import { formatDate, Movie } from '../api/tmdb'
import { Link } from "react-router-dom";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import styles from './FavoriteItem.module.css';

type FavoriteItemProps = {
    movie: Movie;
    unFaved: (movieId: number) => void;
};

function FavoriteItem(props: FavoriteItemProps) {

    function handleClick(movieId: number) {
        props.unFaved(movieId);
    }

    return (
        <Container >
            <Card className="my-3">
                <Row style={{ height: '200px' }} noGutters>
                    <Col style={{ flex: '0 0 calc(200px / 1.5)' }} className='h-100'>
                        <Link to={"/" + props.movie.id}>
                            <Card.Img className='h-100 border-right' src={props.movie.poster_path} />
                        </Link>
                    </Col>
                    <Col>
                        <Card.Body>
                            <div className='d-flex'>
                                <p className={styles.ButtonVotes}>{props.movie.vote_average}</p>
                                <div className='mx-2 my-auto'>
                                    <Card.Title className='mb-0'>{props.movie.title}</Card.Title>
                                    <p className='text-muted'>{formatDate(props.movie.release_date, 'short')}</p>
                                </div>
                            </div>
                            <Card.Subtitle className={styles.Trancate}>{props.movie.overview}</Card.Subtitle>
                            <label className='d-inline-block mt-1'>
                                <Button variant="primary" onClick={() => handleClick(props.movie.id)} className={`d-inline pl-0 ${styles.iconButton} ${styles.selected}`}>
                                    <i className='fas fa-star fa-lg'></i>
                                </Button>
                            Favorite
                            </label>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container >
        //     <Container >
        //     <Row>
        //         <Col>
        //             <Link to={"/" + props.movie.id}>
        //                 <img src={props.movie.poster_path}></img>
        //             </Link>
        //         </Col>
        //         <Col>
        //             <div >
        //                 <div >
        //                     <div >
        //                         <p >{props.movie.vote_average}</p>
        //                     </div>
        //                     <div>
        //                         <h3 >{props.movie.title}</h3>
        //                         <p >{formatDate(props.movie.release_date, 'long')}</p>
        //                     </div>
        //                 </div>
        //                 <p>{props.movie.overview}</p>
        //                 <button onClick={() => handleClick(props.movie.id)}>
        //                     <i style={{ color: "magenta" }} className='fas fa-star fa-lg'></i>
        //                     <p >Favorite</p>
        //                 </button>
        //             </div>
        //         </Col>
        //     </Row>
        // </Container >
    )
}
export default FavoriteItem;