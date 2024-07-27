import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectList from './components/ProjectList';
import TaskList from './components/TaskList';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/tasks" element={<TaskList />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
