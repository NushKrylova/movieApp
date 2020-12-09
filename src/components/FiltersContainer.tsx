import React from "react";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import Sort from "./Sort";
import FilterGenres from "./FilterGenres";
import FilterReleaseDates from "./FilterReleaseDates";
import FilterUserScore from "./FilterUserScore";

type FiltersContainerProps = {
  searchClicked: (formData: FormData) => void;
};

function FiltersContainer(props: FiltersContainerProps): JSX.Element {
  function handleClick(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    props.searchClicked(formData);
    // for (var key of formData.keys()) {
    //     console.log(">>>", key, ",", formData.get(key));
    // }
  }
  return (
    <Form onSubmit={handleClick} className="pl-0 pt-1">
      <Sort />
      <Form.Group controlId="Filters" className="p-3 border rounded">
        <p className="h4">Filters</p>
        <hr />
        <FilterGenres />
        <hr />
        <FilterReleaseDates />
        <hr />
        <FilterUserScore />
      </Form.Group>
      <Button variant="primary" name="search" type="submit" block>
        Search
      </Button>
    </Form>
  );
}
export default FiltersContainer;
