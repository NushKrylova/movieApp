import React from 'react';
import { Link, useHistory } from "react-router-dom";

function Header(props:{searchRequested: (value: string)=>void}) {
    const history = useHistory();
    function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            history.push("/search");
            props.searchRequested(e.currentTarget.value);
        }
    }
    return (
        <div className="Header">
            <div className="HeaderContainer FixedContainer">
                <div className="HeaderContainer">
                    <Link to="/" className="Link">
                        <img src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg' width="154" height="20" />
                    </Link>
                    <nav>
                        <Link to="/movies" className="Link">Discover Movies</Link>
                    </nav>
                </div>
                <div className="HeaderContainer">
                    <input type="text" id="search" name="search" placeholder="Search" className="Input" onKeyPress={handleKeyPress}></input>
                </div>
                <Link to="/favorite" className="Fav Link">
                    <i className="fas fa-star fa-lg" title={"Favorites movies"}>
                        {/* <span className="TooltipText">Favorites movies</span> */}
                    </i>
                </Link>
            </div>
        </div>
    )
}
export default Header;
