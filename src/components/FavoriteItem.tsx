import React from "react";
import { formatDate, Movie } from '../api/tmdb'
import { Link } from "react-router-dom";
import { Card, Button, Row, Col, Container } from "react-bootstrap";

type FavoriteItemProps = {
    movie: Movie;
    unFaved: (movieId: number) => void;
};

function FavoriteItem(props: FavoriteItemProps) {

    function handleClick(movieId: number) {
        props.unFaved(movieId);
    }

    return (
        // <div >
        //     <Link to={"/" + props.movie.id}>
        //         <img src={props.movie.poster_path}></img>
        //     </Link>
        //     <div >
        //         <div >
        //             <div >
        //                 <p >{props.movie.vote_average}</p>
        //             </div>
        //             <div>
        //                 <h3 >{props.movie.title}</h3>
        //                 <p >{formatDate(props.movie.release_date, 'long')}</p>
        //             </div>
        //         </div>
        //         <p>{props.movie.overview}</p>
        //         <button onClick={() => handleClick(props.movie.id)}>
        //             <i style={{ color: "magenta" }} className='fas fa-star fa-lg'></i>
        //             <p >Favorite</p>
        //         </button>
        //     </div>
        // </div>
        <Container>
            <Card>
                <Row noGutters>
                    <Col sm={2}>
                        <Link to={"/" + props.movie.id}>
                            <Card.Img variant="top" src={props.movie.poster_path} />
                        </Link>
                    </Col>
                    <Col sm={10}>
                        <Card.Body>
                            <Card.Title className='float-left'>{props.movie.vote_average}</Card.Title>
                            <Card.Title>{props.movie.title}</Card.Title>
                            <Card.Subtitle className="text-muted">{formatDate(props.movie.release_date, 'short')}</Card.Subtitle>
                            <Card.Title>{props.movie.overview}</Card.Title>
                            <button onClick={() => handleClick(props.movie.id)}>
                                <i style={{ color: "magenta" }} className='fas fa-star fa-lg'></i>
                                <p >Favorite</p>
                            </button>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>
    )
}
export default FavoriteItem;