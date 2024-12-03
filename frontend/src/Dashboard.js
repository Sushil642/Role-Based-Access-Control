import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const [role, setRole] = useState('');
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const currRole = location.state?.currRole || localStorage.getItem('role');
  const currtoken = location.state?.currtoken || localStorage.getItem('token');
  const PORT=3000;
  const BASE_URL = `http://localhost:${PORT}/`

  useEffect(() => {
    const fetchRole = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login'); // Redirect to login if no token
          return;
        }
        setRole(currRole);
      } catch (error) {
        console.error('Error fetching role:', error);
        navigate('/login'); // Redirect to login on error
      }
    };

    fetchRole();
  }, [navigate]);

  const fetchData = async (endpoint) => {
    try {
      const token = localStorage.getItem('token');
      console.log(`${BASE_URL}api/users/${endpoint}`);
      const response = await axios.get(`${BASE_URL}api/users/${endpoint}`, {
        headers: {
          Authorization: `Bearer ${currtoken}`,
        },
      });

      setData(response.data); // Assuming the API returns the relevant list
    } catch (error) {
      console.error(`Error fetching ${endpoint} data:`, error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      const token = localStorage.getItem('token');
      console.log(userId);
      console.log(token);
    const resp=  await axios.delete(`${BASE_URL}api/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${currtoken}`,
        },
      });
      console.log(resp);
      setData(data.filter(user => user._id !== userId)); // Remove deleted user from state
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const renderButtons = () => {
    switch (role) {
      case 'admin':
        return (
          <>
            <button className="dashboard-button" onClick={() => fetchData('manager')}>Get Managers</button>
            <button className="dashboard-button" onClick={() => fetchData('user')}>Get Users</button>
          </>
        );
      case 'manager':
        return <button className="dashboard-button" onClick={() => fetchData('user')}>Get Users</button>;
      default:
        return <p style={{color:"white"}}>Welcome User</p>;
    }
  };

  const renderTable = () => {
    if (!data.length) return <p style={{color:"white"}}>No data available</p>;

    return (
      <table className="user-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.username}</td>
              <td>{item.role}</td>
              <td>
                <button
                  className="delete-button"
                  onClick={() => deleteUser(item._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="dashboard-container">
      <h2 style={{color:"white"}}>Dashboard</h2>
      <p style={{color:"white"}} >Welcome {role}</p>
      {renderButtons()}
      {renderTable()}
    </div>
  );
};

export default Dashboard;
