import React from 'react';
import { formatDate, Movie } from '../api/tmdb'
import { Link } from "react-router-dom";
import styles from './PopularItem.module.css';

type PopularItemProps = {
    movie: Movie;
};

function PopularItem(props: PopularItemProps) {
    return (
        <div className={styles.Card}>
            <Link className={styles.ImageConteiner} to={"/" + props.movie.id}>
                <img className={styles.Image} src={props.movie.poster_path}></img>
            </Link>
            <div className={styles.TextCard}>
                <h3 className={styles.Title}>{props.movie.title}</h3>
                <p className={styles.ReleaseDate}>{formatDate(props.movie.release_date, 'short')}</p>
            </div>
        </div>
    )
}
export default PopularItem;
