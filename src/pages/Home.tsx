import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Banner from "../components/Banner";
import PopularItem from "../components/PopularItem";
import { getPopular, Movie, parseListOfMovies } from "../api/tmdb";

function Home(): JSX.Element {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getPopular().then((data) => {
      const results = parseListOfMovies(data.results);
      setMovies(results);
    });
  }, []);

  const cards = movies.map((el) => (
    <Col className="p-1" key={el.id} sm={6} md={3}>
      <PopularItem movie={el} />
    </Col>
  ));

  return (
    <Container>
      <h5 className="my-2">What is Popular</h5>
      <Row>
        <Col className="mb-1 d-none d-md-block">
          <Banner />
        </Col>
      </Row>
      <Row className="mx-n1">{cards}</Row>
    </Container>
  );
}
export default Home;
