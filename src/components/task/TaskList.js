import React from "react";
import Task from "./Task";
import css from './TaskList.module.css';

function TaskList(props) {
  return (
    <ul className={css.list}>
      {
        props.tasks.map(task => {
          return (
            <Task 
              key={task.id}
              id={task.id}
              title={task.title}
              description={task.description}
            />
          );
        })
      }
    </ul>
  );
}

export default TaskList;