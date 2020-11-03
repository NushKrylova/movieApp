import React, { useEffect, useState } from "react";
import Banner from '../components/Banner'
import PopularItem from '../components/PopularItem'
import { getPopular, Movie, parseListOfMovies } from "../api/tmdb";
import { Col, Container, Row } from "react-bootstrap";

function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getPopular().then(data => {
      let results = parseListOfMovies(data.results)
      setMovies(results);
    })
  }, []);

  const cards = movies.map(el => <Col className='p-1' key={el.id} sm={6} md={3}><PopularItem movie={el} /></Col>)

  return (
    <Container>
      <h5>What's Popular</h5>
      <Row>
        <Col className='mb-1'>
          <Banner />
        </Col>
      </Row>
      <Row className='mx-n1'>
        {cards}
      </Row>
    </Container>
  )
}
export default Home;
