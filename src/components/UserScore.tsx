import React from "react";
import { Button } from "react-bootstrap";
import styles from "./UserScore.module.scss";

type UserScoreProps = {
  vote: number;
  size: string;
  className?: string;
};

function UserScore({
  size,
  vote,
  className = "",
}: UserScoreProps): JSX.Element {
  let sizeStyle = `${styles.medium}`;
  if (size === "sm") {
    sizeStyle = `btn-sm ${styles.small}`;
  }
  return (
    <Button className={`rounded-circle btn-dark ${sizeStyle} ${className}`}>
      {vote}
    </Button>
  );
}
export default UserScore;
