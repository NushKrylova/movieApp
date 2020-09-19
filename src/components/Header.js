import React from 'react';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="Header">
            <div className="HeaderContainer FixedContainer">
                <div className="HeaderContainer">
                    <Link to="/">
                        <img src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg' width="154" height="20" />
                    </Link>
                    <nav>
                        <Link to="/movies">Popular Movies</Link>
                    </nav>
                </div>
                <div className="HeaderContainer">
                    <input type="text" id="search" name="search" placeholder="Search" className="Input"></input>
                </div>
            </div>
        </div>
    )
}
export default Header;
