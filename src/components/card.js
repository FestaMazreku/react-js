import React from "react";
import styles from "./card.css";

const Card = (props) => {
  return (
    <div
      className={styles.card}
      style={{ backgroundColor: props.backgroundColor }}
    >
      <h4>{props.title}</h4>
      <img src="#" alt="article" />
      <p>{props.description}</p>
    </div>
  );
};

export default Card;
