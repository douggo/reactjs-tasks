import React from "react";
import css from "./Modal.module.css";

function Modal(props) {

  function onFinishTask(event) {
    event.preventDefault();
    props.finish(props.id);
    props.closeModal();
  }

  return (
    <div className={css.modal}>
      <p>Are you sure you want to finish this task?</p>
      <form onSubmit={onFinishTask}>
        <button>Confirm</button>
      </form>
      <button onClick={props.closeModal}>Cancel</button>
    </div>
  );
}

export default Modal;