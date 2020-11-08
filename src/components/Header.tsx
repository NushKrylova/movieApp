import React, { FormEvent } from 'react';
import { Nav, Form, FormControl, Container, Row } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useHistory } from "react-router-dom";

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
        <Container fluid className='bg-dark'>
            <Container >
                <Navbar expand="lg" className="mx-n3 navbar-dark bg-dark">
                    <Navbar.Brand as={Link} to="/">
                        <img src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg' width="154" height="20" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link as={Link} to="/movies">Browse</Nav.Link>
                        </Nav>
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/favorite">Favorites</Nav.Link>
                        </Nav>
                        <Form onSubmit={preventSubmit} inline>
                            <FormControl type="text" placeholder="Search" onKeyPress={handleKeyPress} />
                        </Form>
                    </Navbar.Collapse>
                </Navbar >
            </Container>
        </Container>
    )
}
export default Header;
