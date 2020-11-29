import React from "react";
import { formatDate, Movie } from "../api/tmdb";
import { Link } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";
import styles from "./FavoriteItem.module.scss";
import UserScore from "./UserScore";

type FavoriteItemProps = {
  movie: Movie;
  unFaved: (movieId: number) => void;
};

function FavoriteItem(props: FavoriteItemProps) {
  function handleClick(movieId: number) {
    props.unFaved(movieId);
  }

  return (
    <Card className="mb-3">
      <Row noGutters>
        <Col xs={5} style={{ flex: "0 0 calc(220px / 1.5)" }}>
          <Link to={"/" + props.movie.id}>
            <Card.Img
              className={`border-right img-fluid ${styles.Image}`}
              src={props.movie.poster_path}
            />
          </Link>
        </Col>
        <Col xs={7} sm={8} md={9} lg={10}>
          <Card.Body className="p-3 h-100">
            <div className="d-flex">
              <UserScore vote={props.movie.vote_average} size="md" />
              <div className="mx-2 my-auto">
                <Card.Title
                  className={`mb-0 ${styles.Truncate1}`}
                  title={props.movie.title}
                >
                  {props.movie.title}
                </Card.Title>
                <p
                  className={`text-muted ${styles.Truncate1}`}
                  title={formatDate(props.movie.release_date, "short")}
                >
                  {formatDate(props.movie.release_date, "short")}
                </p>
              </div>
            </div>
            <p
              className={`m-0 mb-2 ${styles.Truncate}`}
              title={props.movie.overview}
            >
              {props.movie.overview}
            </p>
            <Button
              variant="primary"
              onClick={() => handleClick(props.movie.id)}
              className={`pl-0 ${styles.IconButton}`}
            >
              <i className={`fas fa-star fa-lg mr-2 ${styles.Selected}`}></i>
              Favorite
            </Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}
export default FavoriteItem;
