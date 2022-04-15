import React, { useEffect, useState } from "react";
import TaskList from "../components/task/TaskList";

function AllTasks(props) {
  const [isLoading, setIsLoading]     = useState(false),
        [loadedTasks, setLoadedTasks] = useState([]);

  useEffect(
    () => {
      setIsLoading(true);
      fetch(
        'https://douglas-636d9.firebaseio.com/tasks.json'
      ).then(
        response => {
          return response.json()
        }
      ).then(
        data => {
          const tasks = [];
          for(const key in data) {
            const task = {
              ...data[key]
            };
            tasks.push(task);
          }
          setIsLoading(false);
          setLoadedTasks(tasks);
        }
      );
    },
    []
  );

  if(isLoading) {
    return (
      <section>
        <p>Loading your tasks, hang on!</p>
      </section>
    );
  }

  return (
    <section>
      <h1>My Tasks:</h1>
      <TaskList tasks={loadedTasks}/>
    </section>
  );
}

export default AllTasks;