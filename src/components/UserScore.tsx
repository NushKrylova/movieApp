import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './UserScore.module.css';
type UserScoreProps = {
    vote: number;
    size: string
};

function UserScore(props: UserScoreProps) {
    let sizeStyle = `${styles.medium}`;
    if (props.size === "sm") {
        sizeStyle = `btn-sm ${styles.small}`;
    }
    return (
        // <p className={styles.ButtonVotes}>{props.vote}</p>
        <Button variant="primary" className={`rounded-circle ${sizeStyle}`}>{props.vote}</Button>
    )
}
export default UserScore;
