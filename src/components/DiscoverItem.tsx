import React from 'react';
import { formatDate, Movie } from '../api/tmdb'
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import UserScore from './UserScore';
import styles from './DiscoverItem.module.scss';

type DiscoverItemProps = {
    movie: Movie;
};

function DiscoverItem(props: DiscoverItemProps) {
    return (
        <Card className="h-100">
            <Link to={"/" + props.movie.id}>
                <div className={styles.ImageContainer}>
                <Card.Img className={`border-bottom ${styles.Image}`} variant="top" src={props.movie.poster_path} />
                </div>
            </Link>
            <Card.Body>
                <div className={styles.UserScoreContainer}>
                    <UserScore className={styles.UserScore} vote={props.movie.vote_average} size="sm" />
                </div>
                <h6>{props.movie.title}</h6>
                <p className='m-0 text-muted'>{formatDate(props.movie.release_date, 'short')}</p>
            </Card.Body>
        </Card>
    )
}
export default DiscoverItem;