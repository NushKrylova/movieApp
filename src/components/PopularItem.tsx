import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { formatDate, Movie } from "../api/tmdb";

type PopularItemProps = {
  movie: Movie;
};

function PopularItem(props: PopularItemProps): JSX.Element {
  const { movie } = props;

  return (
    <Card className="h-100">
      <Link to={`/${movie.id}`}>
        <Card.Img variant="top" src={movie.poster_path} />
      </Link>
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Subtitle className="text-muted">
          {formatDate(movie.release_date, "short")}
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
}
export default PopularItem;
