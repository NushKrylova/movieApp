import React from "react";
import { Form } from "react-bootstrap";

function Sort() {
  return (
    <Form.Group controlId="sort" className="border rounded p-3">
      <p className="h4">Sort</p>
      <hr />
      <Form.Label>Sort Results By</Form.Label>
      <Form.Control name="sort" as="select" custom>
        <option value="">no sorting</option>
        <option value="original_title.asc">Title[A-Z]</option>
        <option value="original_title.desc">Title[Z-A]</option>
      </Form.Control>
    </Form.Group>
  );
}
export default Sort;
