import React from "react";
import { useHistory } from "react-router-dom";
import TaskNewForm from "../components/task/TaskNewForm";

function NewTask() {

  const History = useHistory();

  function submit(Task) {
    fetch(
      'https://douglas-636d9.firebaseio.com/tasks.json',
      {
        method  : 'POST',
        body    : JSON.stringify(Task),
        headers : {
          'Content-Type' : 'application:json'
        }
      }
    ).then(() => {
      History.replace('/');
    });
  }

  return (
    <section>
      <h1>Add a new task:</h1>
      <TaskNewForm submit={submit}/>
    </section>
  );
}

export default NewTask;