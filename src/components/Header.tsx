import React from 'react';
import { Link, useHistory } from "react-router-dom";
import styles from './Header.module.css';

type HeaderProps = {
    searchRequested: (value: string) => void;
};

function Header(props: HeaderProps) {
    const history = useHistory();
    function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            history.push("/search?q=" + encodeURIComponent(e.currentTarget.value));
            props.searchRequested(e.currentTarget.value);
        }
    }
    return (
        <div className={styles.Header}>
            <div className={styles.ContentContainer} >
                <div className={styles.HeaderHalf}>
                    <Link to="/" className={styles.Link}>
                        <img className={styles.Image} src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg' width="154" height="20" />
                    </Link>
                    <nav>
                        <Link to="/movies" className={styles.Link}>Discover movies</Link>
                    </nav>
                </div>
                <div className={styles.HeaderHalf}>
                    <input className={styles.Search} type="text" id="search" name="search" placeholder="Search" onKeyPress={handleKeyPress}></input>
                </div>
                <Link to="/favorite" className={styles.Link}>
                    <i className="fas fa-star fa-lg" title={"Favorites movies"}>
                    </i>
                </Link>
            </div>
        </div>
    )
}
export default Header;
