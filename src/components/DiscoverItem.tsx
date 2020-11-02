import React from 'react';
import { formatDate, Movie } from '../api/tmdb'
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import styles from './DiscoverItem.module.css';

type DiscoverItemProps = {
    movie: Movie;
};

function DiscoverItem(props: DiscoverItemProps) {
    return (
        <Card className="h-100">
            <Link style={{height: '358px'}} to={"/" + props.movie.id}>
                <Card.Img className="h-100 border-bottom" variant="top" src={props.movie.poster_path} />
            </Link>
            <Card.Body>
                <p className={styles.ButtonVotes}>{props.movie.vote_average}</p>
                <p>{props.movie.title}</p>
                <p className='text-muted'>{formatDate(props.movie.release_date, 'short')}</p>
            </Card.Body>
        </Card>
    )
}
export default DiscoverItem;
