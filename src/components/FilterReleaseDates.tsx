import React from "react";
import { Form, FormControl, Row, Col } from "react-bootstrap";

function FilterReleaseDates() {
  return (
    <Form.Group controlId="ReleaseDates">
      <Form.Label>Release Dates</Form.Label>
      <Form.Group as={Row} controlId="from">
        <Form.Label column sm="2">
          from
        </Form.Label>
        <Col sm="10">
          <FormControl
            type="date"
            style={{ fontSize: "15px" }}
            name="from"
           />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="to">
        <Form.Label column sm="2">
          to
        </Form.Label>
        <Col sm="10">
          <FormControl
            type="date"
            style={{ fontSize: "15px" }}
            name="to"
           />
        </Col>
      </Form.Group>
    </Form.Group>
  );
}
export default FilterReleaseDates;
