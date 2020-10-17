import React from 'react';
import { formatDate, Movie } from '../api/tmdb'
import { Link } from 'react-router-dom';
import styles from './DiscoverItem.module.css';

type DiscoverItemProps = {
    movie: Movie;
};

function DiscoverItem(props: DiscoverItemProps) {
    return (
        <div className={styles.Card}>
            <Link className={styles.ImageContainer} to={"/" + props.movie.id}>
                <img className={styles.Image} src={props.movie.poster_path}></img>
            </Link>
            <div className={styles.TextCard}>
                <p className={styles.Vote}>{props.movie.vote_average}</p>
                <h3 className={styles.Title}>{props.movie.title}</h3>
                <p className={styles.ReleaseDate}>{formatDate(props.movie.release_date, 'short')}</p>
            </div>
        </div>
    )
}
export default DiscoverItem;
