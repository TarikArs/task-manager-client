// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskManager from './pages/TaskManager';
import CreateTask from './pages/CreateTask';
import SingleTask from './pages/SingleTask';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskManager />} />
        <Route path="/create" element={<CreateTask />} />
        <Route path="/:taskId" element={<SingleTask />} />
      </Routes>
    </Router>
  );
};

export default App;
