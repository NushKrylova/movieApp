import React, { useState } from "react";
import { Form } from "react-bootstrap";

function FilterUserScore() {
    const [value, setValue] = useState(10);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setValue(parseInt(e.target.value))
    }
    return (
        <Form.Group controlId="UserScore">
            <Form.Label>User Score</Form.Label>
            <Form.Control name="slider" type="range" min="0" max="10" value={value} onChange={handleChange} />
            <datalist id="ticks">
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
            </datalist>
        </Form.Group>
    )
}
export default FilterUserScore;
