import React from "react";
import css from "./Backdrop.module.css";

function Backdrop(props) {
  return (
    <div className={css.backdrop} onClick={props.removeBackdrop}></div>
  );
}

export default Backdrop;