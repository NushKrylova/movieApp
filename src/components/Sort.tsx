import React from 'react';
import { Form } from 'react-bootstrap';
import styles from './Sort.module.css';

function Sort() {
    return (
        <Form.Group controlId="sort">
            <div className={styles.Border}>
                <h2>Sort</h2>
                <hr className={styles.Divider} />
                <Form.Label>Sort Results By</Form.Label>
                <Form.Control name="sort" as="select" custom>
                    <option value="">no sorting</option>
                    <option value="original_title.asc">Title[A-Z]</option>
                    <option value="original_title.desc">Title[Z-A]</option>
                </Form.Control>
            </div>
        </Form.Group>
    )
}
export default Sort;
