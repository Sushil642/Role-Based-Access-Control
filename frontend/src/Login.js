import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
   const PORT=3000;
  const BASE_URL = `http://localhost:${PORT}/`
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}api/auth/login`, formData);
      const { token,role } = response.data;

      // Save token to localStorage
      localStorage.setItem('token', token);

      setMessage('Login successful!');
      console.log(response.role);
      navigate('/dashboard',{state:{currtoken:token,currRole:role}}); // Redirect to dashboard
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{color:"white"}}>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
          style={{ margin: '10px' }}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          style={{ margin: '10px' }}
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Login;
