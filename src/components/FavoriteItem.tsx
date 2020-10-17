import React from "react";
import { formatDate, Movie } from '../api/tmdb'
import { Link } from "react-router-dom";
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
        <div className={styles.BorderCard}>
            <Link className={styles.ImageContainer} to={"/" + props.movie.id}>
                <img className={styles.Image} src={props.movie.poster_path}></img>
            </Link>
            <div className={styles.FavDetails}>
                <div className={styles.TopDetails}>
                    <div className={styles.Actions}>
                        <p className={styles.ButtonVotes}>{props.movie.vote_average}</p>
                    </div>
                    <div className={styles.TextTopDetails}>
                        <h3 className={styles.Title}>{props.movie.title}</h3>
                        <p className={styles.ReleaseDate}>{formatDate(props.movie.release_date, 'long')}</p>
                    </div>
                </div>
                <p>{props.movie.overview}</p>
                <button className={styles.ButtonFav} onClick={() => handleClick(props.movie.id)}>
                    <i style={{ color: "magenta" }}className='fas fa-star fa-lg'></i>
                    <p className={styles.Label}>Favorite</p>
                </button>
            </div>
        </div>
    )
}
export default FavoriteItem;