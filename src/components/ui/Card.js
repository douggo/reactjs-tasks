import React from "react";
import css from './Card.module.css';

function Card(props) {
  return (
    <div className={css.card}>
      {props.children}
    </div>
  );
}

export default Card;