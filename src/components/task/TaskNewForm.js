import React from "react";
import Card from "../ui/Card";
import { useRef } from "react";
import css from './TaskNewForm.module.css';

function TaskNewForm(props) {

  const references = {
    id          : useRef(),
    title       : useRef(),
    description : useRef()
  };

  function onSubmitTaskForm(event) {
    event.preventDefault();
    const Task = {
      id          : references['id']['current'].value, 
      title       : references['title']['current'].value,
      description : references['description']['current'].value
    };
    props.submit(Task);
  }

  return (
    <Card>
      <form className={css.form} onSubmit={onSubmitTaskForm}>
        <div className={css.control}>
          <label htmlFor='id'>ID</label>
          <input type='number' id='number' ref={references['id']} required/>
        </div>
        <div className={css.control}>
          <label htmlFor='title'>Task Title</label>
          <input type='text' id='title' ref={references['title']} required />
        </div>
        <div className={css.control}>
          <label htmlFor='description'>Description</label>
          <input type='text' id='description' ref={references['description']} required />
        </div>
        <div className={css.actions}>
          <button>Confirm</button>
        </div>
      </form>
    </Card>
  );
}

export default TaskNewForm;