import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TaskList = ({ projectId }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/tasks/?project=${projectId}`)
      .then(response => setTasks(response.data))
      .catch(error => console.error(error));
  }, [projectId]);

  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
