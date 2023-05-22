// TaskList.js

import React, { useEffect, useState } from 'react';
import { fetchTasks } from '../services/api';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasksData = async () => {
      try {
        const tasksData = await fetchTasks();
        setTasks(tasksData);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasksData();
  }, []);

  return (
    <div>
      <h2>Task List</h2>
      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          {/* Add more task details here */}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
