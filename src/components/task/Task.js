import React, { useState } from "react";
import Card from "../ui/Card";
import Modal from "../ui/Modal";
import Backdrop from "../ui/Backdrop";
import css from "./Task.module.css";
import { useHistory } from "react-router-dom";

function Task(props) {

  const [isRemoving, setIsRemovingTask] = useState(false),
        History = useHistory();

  function setIsRemoving() {
    setIsRemovingTask(true);
  }

  function setIsNotRemoving() {
    setIsRemovingTask(false);
  }

  function finish(taskId) { 
    fetch(
      `https://douglas-636d9.firebaseio.com/tasks.json`,
      {
        method : 'DELETE',
        body : {
          id : taskId
        },
        headers : {
          'Content-Type' : 'application:json'
        }
      }
    ).then(
      History.replace('/')
    );
  }

  return (
    <li key={props.id} className={css.item}>
      <Card>
        <h2>{props.id} - {props.title}</h2>
        <p>{props.description}</p>
        <div className={css.actions}>
          <button className={css.btn} onClick={setIsRemoving}>Finish</button>
        </div>
        {isRemoving && <Modal closeModal={setIsNotRemoving} finish={finish} id={props.id}/>}
        {isRemoving && <Backdrop removeBackdrop={setIsNotRemoving} />}
      </Card>
    </li>
  );
}

export default Task;