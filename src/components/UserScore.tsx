import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './UserScore.module.css';
type UserScoreProps = {
    vote: number;
    size: string;
    className?: string;
};

function UserScore(props: UserScoreProps) {
    let sizeStyle = `${styles.medium}`;
    if (props.size === "sm") {
        sizeStyle = `btn-sm ${styles.small}`;
    }
    return (
        <Button variant="primary" className={`rounded-circle ${sizeStyle} ${props.className}`}>{props.vote}</Button>
    )
}
export default UserScore;
