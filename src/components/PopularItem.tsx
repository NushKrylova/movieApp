import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { formatDate, Movie } from "../api/tmdb";

type PopularItemProps = {
  movie: Movie;
};

function PopularItem(props: PopularItemProps) {
  return (
    <Card className="h-100">
      <Link to={`/${props.movie.id}`}>
        <Card.Img variant="top" src={props.movie.poster_path} />
      </Link>
      <Card.Body>
        <Card.Title>{props.movie.title}</Card.Title>
        <Card.Subtitle className="text-muted">
          {formatDate(props.movie.release_date, "short")}
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
}
export default PopularItem;
