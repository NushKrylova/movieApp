import React from 'react';
import { formatDate, Movie } from '../api/tmdb'
import { Link } from "react-router-dom";
import styles from './SearchItem.module.css';

type SearchItemProps = {
    movie: Movie;
};

function SearchItem(props: SearchItemProps) {
    return (
        <div className={styles.ListItem}>
            <Link className={styles.ImageContainer} to={"/" + props.movie.id}>
                <img className={styles.Image} src={props.movie.poster_path}></img>
            </Link>
            <div className={styles.ListItemText}>
                <div>
                    <h3>{props.movie.title}</h3>
                    <p className={styles.ReleaseDate}>{formatDate(props.movie.release_date, 'long')}</p>
                </div>
                <p className={styles.Overview}>{props.movie.overview}</p>
            </div>
        </div>
    )
}
export default SearchItem;