import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';
import './index.css';

function App() {
  return (
    <Router>
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <h1>User Authentication and RBAC</h1>
        <nav>
          <Link to="/register" style={{ margin: '10px' }}>Register</Link>
          <Link to="/login" style={{ margin: '10px' }}>Login</Link>
          <Link to="/dashboard" style={{ margin: '10px' }}>Dashboard</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
