import React, { FormEvent } from 'react';
import { Nav, Form, FormControl, Container, Row } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
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
    function preventSubmit(e: FormEvent) {
        e.preventDefault();
    }
    return (
        <Container>
            < Navbar expand="lg">
                <Navbar.Brand as={Link} to="/">
                    <img className={styles.Image} src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg' width="154" height="20" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/movies">Discover movies</Nav.Link>
                    </Nav>
                    <Form onSubmit={preventSubmit} inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" onKeyPress={handleKeyPress} />
                    </Form>
                    <Nav.Link as={Link} to="/favorite" className={styles.Link}>
                        <i className="fas fa-star fa-lg" title={"Favorites movies"}></i>
                    </Nav.Link>
                </Navbar.Collapse>
            </Navbar >
        </Container>
    )
}
export default Header;
