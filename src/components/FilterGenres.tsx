import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Genre, getGenres } from "../api/tmdb";

function FilterGenres() {
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    getGenres().then((data) => setGenres(data.genres));
  }, []);

  const genreFields = genres.map((el) => (
    <div key={el.id}>
      <Form.Check
        type="checkbox"
        value={el.id}
        name={"genres" + el.name}
        id={el.id.toString()}
        label={el.name}
      />
    </div>
  ));
  return (
    <Form.Group controlId="Genres">
      <Form.Label>Genres</Form.Label>
      <fieldset>{genreFields}</fieldset>
    </Form.Group>
  );
}
export default FilterGenres;
